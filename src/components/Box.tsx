import styled from "styled-components/native";

import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  position,
  PositionProps,
} from "styled-system";

type Props = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  ShadowProps &
  PositionProps;

const Box = styled.View<Props>(
  space,
  color,
  layout,
  flexbox,
  position,
  border,
  shadow
);

export default Box;
