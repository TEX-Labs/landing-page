import { cn } from "@/utils/cn";
import React from "react";
import { Infocard, InfocardItem } from "./Infocard";
import {
  IconBoxAlignRightFilled,
  IconSettings,
  IconHierarchyOff,
  IconSparkles,
  IconBuilding,
  IconArrowsShuffle,
  IconBuildingBank,
  IconUserCheck,
  IconGauge,
  IconUser,
  IconHeartbeat,
  IconCertificate,
  IconSchool,
  IconFileCertificate,
  IconBuildingStore,
  IconSourceCode,
} from "@tabler/icons-react";
import { MeteorsDemo } from "../Meteors/MeteorsDemo";

export function InfocardDemo() {
  return (
    <Infocard className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <InfocardItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </Infocard>
  );
}
const Skeleton = () => <MeteorsDemo />;
const items = [
  {
    title: "DeFi Trading Infrastructure",
    description:
      "Advanced DeFi infrastructure with real-time socket connections for seamless trading experiences, providing low-latency execution and comprehensive market data integration.",
    header: <Skeleton />,
    icon: <IconArrowsShuffle stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Telegram Trading Bots",
    description:
      "Sophisticated Telegram bots that provide real-time trading alerts, portfolio tracking, automated trading strategies, and market analysis directly in your chat.",
    header: <Skeleton />,
    icon: <IconSettings stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Smart Contract Scanner",
    description:
      "AI-powered tool that analyzes smart contracts for vulnerabilities, gas optimization opportunities, and security risks, providing comprehensive audit reports.",
    header: <Skeleton />,
    icon: <IconSparkles stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Meeting Recorder & Blockchain Storage",
    description:
      "Revolutionary AI system that records meetings, generates intelligent summaries, and stores them securely on blockchain for immutable record-keeping and easy retrieval.",
    header: <Skeleton />,
    icon: <IconSourceCode stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Real-time Alert System",
    description:
      "Comprehensive notification system delivering instant alerts for price movements, trading opportunities, DeFi protocol updates, and market events via Telegram.",
    header: <Skeleton />,
    icon: <IconGauge stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "Socket-based Portfolio Tracker",
  //   description:
  //     "Real-time portfolio monitoring with socket technology, providing instant updates on asset performance, DeFi positions, and yield farming opportunities.",
  //   header: <Skeleton />,
  //   icon: <IconBuildingBank stroke={2} className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Blockchain Education Platform",
  //   description:
  //     "Comprehensive learning platform focusing on DeFi protocols, AI-blockchain integration, and practical development skills for the next generation of developers.",
  //   header: <Skeleton />,
  //   icon: <IconSchool stroke={2} className="h-4 w-4 text-neutral-500" />,
  // },
];
