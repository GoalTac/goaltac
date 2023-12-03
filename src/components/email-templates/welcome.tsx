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
import Image from "next/image";

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
              <Image src={`/name_logo.png`}
                width="170"
                height="50"
                alt="Logo" />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Welcome!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              GoalTac is currently in development. We will send updates and let you know when it is ready for use!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Have questions? Contact my.phung@uconn.edu. I would love to chat any time :)
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                pX={20}
                pY={12}
                className="rounded bg-[#000000] text-center text-[12px] font-semibold text-white no-underline"
                href={"https://www.goaltac.net/dashboard"}>
                Visit
              </Button>
            </Section>
            <Text>
              Best,
              <br />
              The GoalTac Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  </Tailwind>
);
