import * as React from 'react';
import { FleurDeLys } from '../../../../model/charge';
import { Tincture } from '../../../../model/tincture';
import { Dimension, scale } from '../../../../model/dimension';
import SvgFleurDeLys from './SvgFleurDeLys';
import { getChargePositions } from '../charge.helper';

type Props = { charge: FleurDeLys; dimension: Dimension; fillFromTincture: (tincture: Tincture) => string };
export const FleurDeLysDisplay = ({ charge, dimension, fillFromTincture }: Props) => {
  const { width, height } = dimension;
  const stroke = charge.tincture.name === 'sable' ? '#777' : '#000';
  const fill = fillFromTincture(charge.tincture);

  const { cellWidth, positions } = getChargePositions(charge.count);
  const computedDimension = scale(dimension, 1.5 * cellWidth);

  return (
    <>
      {positions.map(([cx, cy], i) => {
        return (
          <g
            key={i}
            transform={`translate(${cx * width - computedDimension.width / 2} ${cy * height -
              computedDimension.height / 2})`}
          >
            <SvgFleurDeLys dimension={computedDimension} stroke={stroke} mainFill={fill} />;
          </g>
        );
      })}
    </>
  );
};
