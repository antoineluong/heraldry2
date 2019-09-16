import * as React from 'react';
import { SimpleBlason } from '../../model/blason';
import { Dimension } from '../../model/dimension';
import { FieldDisplay } from './FieldDisplay';
import { OrdinaryDisplay } from './ordinaries/OrdinaryDisplay';
import { ChargeDisplay } from './ChargeDisplay';
import { Tincture } from '../../model/tincture';
import { SimpleBlasonShape } from './blasonDisplay.helper';
import { ShieldShape } from '../../model/configuration';
import { Ordinary } from '../../model/ordinary';
import { cannotHappen } from '../../../utils/cannot-happen';

type Props = {
  blason: SimpleBlason;
  dimension: Dimension;
  fillFromTincture: (tincture: Tincture) => string;
  clipPathId: string;
  shape: SimpleBlasonShape;
  shieldShape: ShieldShape;
};
export const SimpleBlasonDisplay = ({ blason, dimension, fillFromTincture, clipPathId, shape, shieldShape }: Props) => {
  const { width, height } = dimension;
  const ordinary = blason.ordinary;

  const baseVerticalOffset = ordinary ? getFieldVerticalOffset(ordinary) : 0;
  const fieldHeightScale = 1 - baseVerticalOffset;
  const fieldDimension = { width, height: height * fieldHeightScale };

  const { horizontalScale, verticalScale, horizontalOffset, verticalOffset } = getChargeDimension(blason, shape);

  const clipPathUrl = `url(#${clipPathId})`;
  return (
    <>
      <g clipPath={clipPathUrl} className="blason-field">
        <GWrapper translate={[0, baseVerticalOffset * height]}>
          <FieldDisplay
            dimension={fieldDimension}
            field={blason.field}
            fillFromTincture={fillFromTincture}
            shape={shape}
          />
        </GWrapper>
      </g>

      {ordinary && (
        <g clipPath={clipPathUrl} className="blason-ordinary">
          <OrdinaryDisplay
            dimension={dimension}
            ordinary={ordinary}
            fill={fillFromTincture(ordinary.tincture)}
            shape={shape}
            shieldShape={shieldShape}
          />
        </g>
      )}

      {blason.charge && (
        <g clipPath={clipPathUrl} className="blason-charge">
          <GWrapper translate={[horizontalOffset * width, (baseVerticalOffset + verticalOffset) * height]}>
            <ChargeDisplay
              dimension={{
                width: horizontalScale * fieldDimension.width,
                height: verticalScale * fieldDimension.height,
              }}
              charge={blason.charge}
              shape={shape}
              fillFromTincture={fillFromTincture}
            />
          </GWrapper>
        </g>
      )}
    </>
  );
};

type GWrapperProps = { translate: [number, number] };
const GWrapper: React.FunctionComponent<GWrapperProps> = (props) => {
  const translate = props.translate;
  if (translate[0] !== 0 || translate[1] !== 0) {
    return <g transform={`translate(${translate[0]} ${translate[1]})`}>{props.children}</g>;
  } else {
    return <>{props.children}</>;
  }
};

function getChargeDimension(
  blason: SimpleBlason,
  shape: SimpleBlasonShape
): { verticalScale: number; horizontalScale: number; horizontalOffset: number; verticalOffset: number } {
  const ordinary = blason.ordinary;
  const charge = blason.charge;

  const chargeCount = charge ? charge.countAndDisposition.count : 0;
  const chargeDisposition = charge ? charge.countAndDisposition.disposition : null;
  if (shape === 'default') {
    const chargeHorizontalOffset =
      (ordinary && ordinary.name === 'bordure' ? (ordinary.line === 'straight' ? 0.085 : 0.125) : 0.015) +
      (chargeDisposition === 'fess' ? 0.012 : 0);

    const defaultChargeHeightOffset =
      chargeDisposition === 'pale'
        ? 0.035
        : chargeCount === 7 || chargeCount === 13
        ? 0.08
        : chargeCount === 8
        ? 0.06
        : chargeCount === 12
        ? 0.05
        : 0.04;
    0;

    let chargeVerticalOffset = 0.01;
    let chargeHeightOffset: number;
    if (ordinary) {
      if (ordinary.name === 'chief') {
        if (ordinary.line === 'straight') {
          chargeHeightOffset = 0.1;
        } else {
          chargeHeightOffset = 0.16;
          chargeVerticalOffset = 0.08;
        }
      } else if (ordinary.name === 'base') {
        if (ordinary.line === 'straight') {
          chargeHeightOffset = 0.13;
        } else {
          chargeHeightOffset = 0.16;
        }
      } else if (ordinary.name === 'bordure') {
        if (ordinary.line === 'straight') {
          chargeHeightOffset = 0.14;
          chargeVerticalOffset = 0.02;
        } else {
          chargeHeightOffset = 0.17;
          chargeVerticalOffset = 0.04;
        }
      } else {
        chargeHeightOffset = defaultChargeHeightOffset;
      }
    } else {
      chargeHeightOffset = defaultChargeHeightOffset;
    }

    return {
      verticalScale: 1 - 2 * chargeHeightOffset,
      horizontalScale: 1 - 2 * chargeHorizontalOffset,
      horizontalOffset: chargeHorizontalOffset,
      verticalOffset: chargeVerticalOffset,
    };
  } else if (shape === 'square') {
    let chargeHorizontalOffset =
      ordinary && ordinary.name === 'bordure' ? (ordinary.line === 'straight' ? 0.09 : 0.15) : 0;

    const defaultChargeHeightOffset = 0.01;

    let chargeVerticalOffset = 0.01;
    let chargeHeightOffset: number;
    if (ordinary) {
      if (ordinary.name === 'chief') {
        chargeHeightOffset = 0.12;
        if (ordinary.line !== 'straight') {
          chargeVerticalOffset = 0.08;
        }
      } else if (ordinary.name === 'base') {
        if (ordinary.line === 'straight') {
          chargeHeightOffset = 0.14;
        } else {
          chargeHeightOffset = 0.16;
        }
      } else if (ordinary.name === 'bordure') {
        if (ordinary.line === 'straight') {
          chargeHeightOffset = 0.07;
        } else {
          chargeHeightOffset = 0.15;
        }
      } else {
        chargeHeightOffset = defaultChargeHeightOffset;
      }
    } else {
      chargeHeightOffset = defaultChargeHeightOffset;
    }

    const chargeDimension = {
      horizontalScale: 1 - 2 * chargeHorizontalOffset,
      verticalScale: 1 - 2 * chargeHeightOffset,
    };
    if (chargeDisposition === 'pale') {
      chargeVerticalOffset += 0.03;
      chargeDimension.verticalScale = chargeDimension.verticalScale * 0.9;
    } else if (chargeDisposition === 'fess') {
      chargeHorizontalOffset += 0.03;
      chargeDimension.horizontalScale = chargeDimension.horizontalScale * 0.9;
    } else {
      chargeVerticalOffset += 0.01;
    }

    if (ordinary && ordinary.name === 'bordure' && ordinary.line !== 'straight') {
      chargeVerticalOffset += 0.035;
    }

    return {
      ...chargeDimension,
      horizontalOffset: chargeHorizontalOffset,
      verticalOffset: chargeVerticalOffset,
    };
  } else if (shape === 'rightCut' || shape === 'leftCut') {
    const ordinaryName = ordinary ? ordinary.name : null;
    const ordinaryLine = ordinary ? ordinary.line : null;

    if (chargeDisposition === 'default') {
      if (ordinaryName === 'bordure') {
        if (ordinaryLine === 'straight') {
          if (chargeCount > 1) {
            return {
              verticalScale: 0.7,
              horizontalScale: 0.7,
              verticalOffset: 0,
              horizontalOffset: shape === 'leftCut' ? 0.2 : 0.087,
            };
          } else {
            return {
              verticalScale: 0.8,
              horizontalScale: 0.65,
              verticalOffset: -0.05,
              horizontalOffset: shape === 'leftCut' ? 0.23 : 0.07,
            };
          }
        } else {
          if (chargeCount > 1) {
            return {
              verticalScale: 0.63,
              horizontalScale: 0.55,
              verticalOffset: 0.04,
              horizontalOffset: shape === 'leftCut' ? 0.29 : 0.15,
            };
          } else {
            return {
              verticalScale: 0.72,
              horizontalScale: 0.59,
              verticalOffset: -0.03,
              horizontalOffset: shape === 'leftCut' ? 0.26 : 0.11,
            };
          }
        }
      }
    } else if (chargeDisposition === 'fess') {
      if (ordinaryName === 'bordure') {
        if (ordinaryLine === 'straight') {
          return {
            verticalScale: 1,
            horizontalScale: 0.62,
            verticalOffset: -0.15,
            horizontalOffset: shape === 'leftCut' ? 0.23 : 0.15,
          };
        } else {
          return {
            verticalScale: 1,
            horizontalScale: 0.59,
            verticalOffset: -0.15,
            horizontalOffset: shape === 'leftCut' ? 0.25 : 0.15,
          };
        }
      } else if (ordinaryName === 'chief') {
        return {
          verticalScale: 0.85,
          horizontalScale: 0.8,
          verticalOffset: -0.07,
          horizontalOffset: shape === 'leftCut' ? 0.2 : 0,
        };
      } else {
        return {
          verticalScale: 1,
          horizontalScale: 0.8,
          verticalOffset: -0.15,
          horizontalOffset: shape === 'leftCut' ? 0.2 : 0,
        };
      }
    }

    const chargeWidthOffset = 0.17;
    const defaultChargeHeightOffset = 0.09;
    let chargeVerticalOffset: number = 0;

    let chargeHeightOffset: number;
    if (ordinary) {
      if (ordinaryName === 'chief') {
        if (ordinaryLine === 'straight') {
          chargeHeightOffset = 0.12;
        } else {
          chargeHeightOffset = 0.13;
          chargeVerticalOffset = 0.04;
        }
      } else if (ordinaryName === 'base') {
        if (ordinaryLine === 'straight') {
          chargeHeightOffset = 0.13;
        } else {
          chargeHeightOffset = 0.16;
        }
      } else if (ordinaryName === 'bordure') {
        if (ordinaryLine === 'straight') {
          chargeHeightOffset = 0.12;
        } else {
          chargeHeightOffset = 0.14;
        }
      } else {
        chargeHeightOffset = defaultChargeHeightOffset;
      }
    } else {
      chargeHeightOffset = defaultChargeHeightOffset;
    }

    const horizontalFactor = 0.76;
    const chargeDimension = {
      horizontalScale: (1 - 2 * chargeWidthOffset) * horizontalFactor,
      verticalScale: 1 - 2 * chargeHeightOffset,
    };

    if (chargeDisposition === 'pale') {
      chargeVerticalOffset = 0.035;
      chargeDimension.verticalScale = chargeDimension.verticalScale * 0.85;
    } else {
      chargeVerticalOffset += 0;
    }

    if (ordinaryName === 'chief' && ordinaryLine !== 'straight') {
      chargeVerticalOffset += 0.045;
      chargeDimension.verticalScale = chargeDimension.verticalScale * 0.9;
    }

    if (ordinaryName === 'bordure' && ordinaryLine !== 'straight') {
      chargeVerticalOffset += 0.045;
      chargeDimension.verticalScale = chargeDimension.verticalScale * 0.9;
      chargeDimension.horizontalScale = chargeDimension.horizontalScale * 0.95;
    }
    if (ordinaryName === 'bordure' && ordinaryLine === 'straight') {
      chargeDimension.horizontalScale = chargeDimension.horizontalScale * 0.95;
    }

    return {
      ...chargeDimension,
      horizontalOffset:
        chargeWidthOffset +
        (ordinaryName === 'bordure' && shape === 'rightCut' ? 0.16 : 0) +
        (ordinaryName === 'bordure' && shape === 'leftCut' ? -0.14 : 0) +
        (ordinaryName !== 'bordure' && shape === 'rightCut' ? 0.09 : 0) +
        (ordinaryName !== 'bordure' && shape === 'leftCut' ? -0.09 : 0) +
        (shape === 'leftCut' ? 1.13 - horizontalFactor : 0) +
        (shape === 'rightCut' ? -(1.03 - horizontalFactor) : 0),
      verticalOffset: chargeVerticalOffset,
    };
  } else {
    return cannotHappen(shape);
  }
}

function getFieldVerticalOffset(ordinary: Ordinary): number {
  if (ordinary.name === 'chief') {
    if (ordinary.line === 'straight') {
      return 1 / 5;
    } else if (ordinary.line === 'engrailed') {
      return 11 / 50;
    } else if (ordinary.line === 'invected') {
      return 13 / 50;
    } else if (ordinary.line === 'indented') {
      return 11 / 50;
    } else {
      return cannotHappen(ordinary.line);
    }
  } else if (ordinary.name === 'bordure') {
    if (ordinary.line === 'engrailed') {
      return 6 / 100;
    } else {
      return 10 / 100;
    }
  } else {
    return 0;
  }
}
