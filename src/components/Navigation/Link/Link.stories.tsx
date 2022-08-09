import { ComponentStory, Meta } from "@storybook/react";
import { Link } from "./Link";

export default {
  title: "Navigation/Link",
  component: Link,
} as Meta;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  children: "Menu",
  isActive: false,
  anchorColor: "#a47e3b",
};
