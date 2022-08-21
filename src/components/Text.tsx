import styled from "styled-components/native";
import {
  size,
  SizeProps,
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  fontFamily,
  FontFamilyProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
} from "styled-system";

type Props = SizeProps &
  ColorProps &
  FontSizeProps &
  FontFamilyProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps;

const Text = styled.Text<Props>(
  color,
  size,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign
);

export default Text;
