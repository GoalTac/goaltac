import { type FC } from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Text,
  Button,
  Tailwind,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
}

export const WelcomeEmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => (
  <Tailwind>
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px] text-center text-3xl font-medium text-black">
              GoalTac
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Welcome {name}
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Welcome to GoalTac, where you collaborate and grow your network
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                pX={20}
                pY={12}
                className="rounded bg-[#000000] text-center text-[12px] font-semibold text-white no-underline"
                href={"https://www.goaltac.net/dashboard"}
              >
                Explore
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  </Tailwind>
);
