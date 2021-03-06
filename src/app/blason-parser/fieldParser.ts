import * as P from 'parsimmon';
import {
  BarryField,
  BendyField,
  BendySinisterField,
  Field,
  GironnyArrondiField,
  GironnyField,
  gironnyNumberAvailable,
  PartyField,
  PlainField,
} from '../model/field';
import { buildAltParser, constStr, lineParser } from './parser.helper';
import { StringifiableNumber, stringifyNumber } from '../model/countAndDisposition';
import { tinctureParserFromCapitalizedName, tinctureParserFromName } from './tinctureParser';
import { parties, Party } from '../model/party';
import { Tierced, tierceds } from '../model/tierced';
import { stringifyParty } from '../model/stringify/stringify.helper';

const partyUnit: P.Parser<Party['name']> = buildAltParser(parties, stringifyParty);

function partyParser(): P.Parser<Party> {
  return P.seq(
    P.alt(constStr('per', 'Party per'), constStr('per'))
      .desc('Per')
      .skip(P.whitespace)
      .then(partyUnit)
      .skip(P.whitespace),
    lineParser.skip(P.whitespace).fallback('straight' as const)
  ).chain(
    ([name, line]): P.Parser<Party> => {
      if (name === 'pall') {
        return P.seq(
          tinctureParserFromName,
          P.string(',').then(P.optWhitespace).then(tinctureParserFromName),
          P.regex(/and/i).trim(P.whitespace).then(tinctureParserFromName)
        ).map((tinctures) => ({ name, tinctures, line }));
      } else {
        return P.seq(
          tinctureParserFromName,
          P.regex(/and/i).trim(P.whitespace).then(tinctureParserFromName)
        ).map((tinctures) => ({ name, tinctures, line }));
      }
    }
  );
}

const tiercedUnit: P.Parser<Tierced['name']> = buildAltParser(tierceds, stringifyParty);
function tiercedParser(): P.Parser<Tierced> {
  return P.seq(
    P.alt(constStr('tierced', 'Tierced per')).skip(P.whitespace).then(tiercedUnit).skip(P.whitespace),
    lineParser.skip(P.whitespace).fallback('straight' as const)
  ).chain(
    ([name, line]): P.Parser<Tierced> => {
      return P.seq(
        tinctureParserFromName,
        P.string(',').then(P.optWhitespace).then(tinctureParserFromName),
        P.regex(/and/i).trim(P.whitespace).then(tinctureParserFromName)
      ).map((tinctures) => ({ name, tinctures, line }));
    }
  );
}

export function fieldParser(): P.Parser<Field> {
  const numberedFieldParserGenerator = <A extends string, X extends StringifiableNumber>(
    baseNames: string | Array<string>,
    value: A,
    numbers: ReadonlyArray<X>,
    defaultValue: X
  ) => {
    const allBaseNames = Array.isArray(baseNames) ? baseNames : [baseNames];
    return P.alt(
      ...allBaseNames.map((baseName) =>
        P.alt(
          constStr(baseName + ' of')
            .skip(P.whitespace)
            .then(buildAltParser(numbers, stringifyNumber)),
          constStr(baseName).result(defaultValue)
        )
      )
    )
      .desc(allBaseNames[0])
      .map((i) => [value, i] as const);
  };

  const numberedFieldParser: P.Parser<BarryField | BendyField | BendySinisterField> = P.seq(
    P.alt(
      numberedFieldParserGenerator('Bendy Sinister', 'bendySinister', [6, 8, 10] as const, 6),
      numberedFieldParserGenerator('Bendy', 'bendy', [6, 8, 10] as const, 6),
      numberedFieldParserGenerator('Barry', 'barry', [6, 8, 10] as const, 6)
    ),
    P.whitespace.then(lineParser).fallback('straight' as const),
    P.whitespace.then(tinctureParserFromName).skip(P.whitespace),
    P.regex(/and/i).skip(P.whitespace).then(tinctureParserFromName)
  ).map(([[kind, number], line, tincture1, tincture2]): BendyField | BendySinisterField => ({
    kind,
    number,
    tinctures: [tincture1, tincture2],
    line,
  }));

  const gironnyParser: P.Parser<GironnyField | GironnyArrondiField> = P.seq(
    P.alt(
      numberedFieldParserGenerator(
        ['Gironny arrondi', 'Gyronny arrondi', 'Gironny arrondy', 'Gyronny arrondy'],
        'gironny-arrondi',
        gironnyNumberAvailable,
        8
      ),
      numberedFieldParserGenerator(['Gironny', 'Gyronny'], 'gironny', gironnyNumberAvailable, 8)
    ),

    P.whitespace.then(tinctureParserFromName).skip(P.whitespace),
    P.regex(/and/i).skip(P.whitespace).then(tinctureParserFromName)
  ).map(
    ([[kind, number], tincture1, tincture2]): GironnyField => ({
      kind,
      number,
      tinctures: [tincture1, tincture2],
    })
  );

  const palyBendyParser: P.Parser<Exclude<Field, PlainField>> = P.seq(
    P.alt(
      P.alt(
        constStr('lozenge-throughout-arched', 'Lozenge throughout arched'),
        constStr('lozenge-throughout-arched', 'Lozenge throughout, arched')
      ).desc('Lozenge throughout arched'),
      constStr('lozenge-throughout', 'Lozenge throughout'),
      constStr('embrassee-a-dexter', 'Embrassee a dexter'),
      constStr('embrassee-a-sinister', 'Embrassee a sinister'),
      constStr('paly-pily', 'Paly pily'),
      constStr('bendy-and-per-pale', 'Bendy and per pale'),
      constStr('bendy-sinister-and-per-bend', 'Bendy sinister and per bend'),
      constStr('bendy-and-per-bend-sinister', 'Bendy and per bend sinister'),
      constStr('barry-and-per-pale', 'Barry and per pale'),
      constStr('barry-and-per-chevron-throughout', 'Barry and per chevron throughout'),
      constStr('barry-pily', 'Barry pily'),
      constStr('bendy-pily-sinister', 'Bendy pily sinister'),
      constStr('quarterly-of-nine', 'Quarterly of nine'),
      constStr('bendy-pily', 'Bendy pily'),
      constStr('paly'),

      P.alt(constStr('chequy'), constStr('chequy', 'Checky')).desc('Chequy'),
      constStr('lozengy-bendwise', 'Lozengy bendwise'),
      constStr('lozengy'),
      constStr('chevronny-reversed', 'Chevronny reversed'),
      constStr('chevronny')
    ),
    P.whitespace.then(tinctureParserFromName).skip(P.whitespace),
    P.regex(/and/i).skip(P.whitespace).then(tinctureParserFromName)
  ).map(
    ([kind, tincture1, tincture2]): Exclude<Field, PlainField | PartyField | BarryField> => ({
      kind,
      tinctures: [tincture1, tincture2],
    })
  );
  return P.alt(
    tinctureParserFromCapitalizedName.map((tincture) => ({
      kind: 'plain',
      tincture,
    })),
    tiercedParser().map((tierced) => ({ kind: 'tierced', per: tierced })),
    partyParser().map((party) => ({ kind: 'party', per: party })),
    gironnyParser,
    numberedFieldParser,
    palyBendyParser
  );
}
