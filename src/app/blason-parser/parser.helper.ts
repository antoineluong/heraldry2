import * as P from 'parsimmon';
import { capitalizeFirstLetter } from '../../utils/strings';
import { Line, lines } from '../model/line';
import { numberToNameMap, StringifiableNumber } from '../model/countAndDisposition';
import { stringifyLine } from '../model/stringify/stringify.helper';

export function buildAltParser<A>(arr: ReadonlyArray<A>, stringifyFn: (a: A) => string | Array<string>): P.Parser<A> {
  return P.alt(
    ...arr
      .flatMap((a) => {
        const strs = stringifyFn(a);
        if (Array.isArray(strs)) {
          return strs.map((str) => [a, str] as const);
        } else {
          return [[a, strs] as const];
        }
      })
      .sort(([, a1], [, a2]) => a2.length - a1.length)
      .map(([a, aStr]) => P.regex(new RegExp(aStr, 'i')).result(a).desc(aStr))
  );
}

export function constStr<S extends string>(str: S, asStr?: string): P.Parser<S> {
  return P.regex(new RegExp(asStr || str, 'i'))
    .result(str)
    .desc(asStr || capitalizeFirstLetter(str));
}

export function numberParser<N extends StringifiableNumber>(n: N): P.Parser<N> {
  return P.regex(new RegExp(numberToNameMap[n], 'i')).result(n).skip(P.whitespace);
}

export const aParser = P.regex(/an?/i)
  .result(1 as const)
  .skip(P.whitespace);

export const lineParser: P.Parser<Line> = buildAltParser(lines, stringifyLine);
