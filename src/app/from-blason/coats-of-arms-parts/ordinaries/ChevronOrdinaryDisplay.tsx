import * as React from 'react';
import { Dimension } from '../../../model/dimension';
import { Chevron, Chevronel } from '../../../model/ordinary';
import { FillFromTincture } from '../../fillFromTincture.helper';
import { CommonOrdinaryDisplay } from './CommonOrdinaryDisplay';
import { computeLineOptions, oneSideLineOption } from '../blasonDisplay.helper';
import { SvgPathBuilder } from '../../../svg-path-builder/svg-path-builder';
import { buildFurTransformProperty } from '../FurPattern.model';
import { cannotHappen } from '../../../../utils/cannot-happen';
import { range } from '../../../../utils/range';

const postfixId = 'chevron';
const ermineScale = 0.3;
const vairScale = 0.23;
const potentScale = 0.16;

type Props = {
  dimension: Dimension;
  ordinary: Chevron | Chevronel;
  fillFromTincture: FillFromTincture;
  onClick: () => void;
};
export const ChevronOrdinaryDisplay = ({ dimension, ordinary, fillFromTincture, onClick }: Props) => {
  const { width, height } = dimension;
  const scaleRatio = height / 480;

  const transformProperties = buildFurTransformProperty(fillFromTincture, {
    ermine: [{ kind: 'scale', value: [ermineScale * scaleRatio, ermineScale * 0.75 * scaleRatio] }],
    vair: [{ kind: 'scale', value: [vairScale * scaleRatio, vairScale * 0.6785 * scaleRatio] }],
    potent: [{ kind: 'scale', value: [potentScale * scaleRatio, potentScale * 1.35 * scaleRatio] }],
  });

  const lineOptions = computeLineOptions(ordinary.line, dimension);
  const oneSideOnly = oneSideLineOption(lineOptions);

  const chevronHeight =
    ordinary.name === 'chevron' ? height / 6 : ordinary.name === 'chevronel' ? height / 12 : cannotHappen(ordinary);
  const pathBuilder = range(0, ordinary.count).map((i) => {
    const topPoint = ((i * 2 + 1) * height) / (ordinary.count * 2 + 1);
    const bottomPoint = (((i + 1) * 2 + 1) * height) / (ordinary.count * 2 + 1);

    const topFlatPart = ordinary.count === 1 ? 3.8 : ordinary.count === 3 ? 12 : -1;

    return SvgPathBuilder.start([width / 2, topPoint])
      .goToWithPartFlat([0, bottomPoint - chevronHeight], lineOptions, topFlatPart, 'start')
      .goTo([0, bottomPoint])
      .goToWithPartFlat([width / 2, topPoint + chevronHeight], oneSideOnly, 5)
      .goToWithPartFlat([width, bottomPoint], oneSideOnly, 5)
      .goTo([width, bottomPoint - chevronHeight])
      .goToWithPartFlat([width / 2, topPoint], lineOptions, topFlatPart, 'end');
  });

  return (
    <CommonOrdinaryDisplay
      tincture={ordinary.tincture}
      fillFromTincture={fillFromTincture}
      onClick={onClick}
      transformProperties={transformProperties}
      pathBuilder={pathBuilder}
      postfixId={postfixId}
    />
  );
};
