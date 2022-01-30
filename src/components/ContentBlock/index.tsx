import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import HeaderContentBlock from "./HeaderContentBlock";

import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "header") return <HeaderContentBlock {...props} />;
  return null;
};

export default ContentBlock;
