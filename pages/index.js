import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Background from "../src/components/Background";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Background>
      <Head>
        <title>TCC</title>
      </Head>
      <Header>
        <Header.Stats
          as={motion.section}
          transition={{ delay: 0, duration: 1 }}
          variants={{
            show: { opacity: 1, x: "0" },
            hidden: { opacity: 0, x: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Header.StatsPicture />
          <Header.StatsInfo>
            <p>William Mota</p>
            <p>Level 24</p>
            <p>xp 220</p>
          </Header.StatsInfo>
        </Header.Stats>
        <Header.Infos
          as={motion.section}
          transition={{ delay: 0, duration: 1 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Header.InfoBar
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: "0" },
              hidden: { opacity: 0, y: "100%" },
            }}
            initial="hidden"
            animate="show"
          >
            <p>Title:</p>
            <p>The Lord of Logic</p>
          </Header.InfoBar>
          <Header.InfoBar>
            <p>Class:</p>
            <p>Human</p>
          </Header.InfoBar>
        </Header.Infos>
        <Header.ExperienceBar
          as={motion.section}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        />
      </Header>
      <Main>
        <Main.PlayerArea
          as={motion.section}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, x: "0" },
            hidden: { opacity: 0, x: "-100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Main.MiniCard>
            <img
              className="icon classic"
              src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633396500/swords_rktxam.svg"
              onClick={() => {
                router.push(`/quiz`);
                console.log("hello world");
              }}
            />
            <p>Classic</p>
          </Main.MiniCard>
          <Main.MiniCard>
            <img
              className="icon"
              src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/scroll_jbw9wv.png"
            />
            <p>About</p>
          </Main.MiniCard>
          <Main.MiniCard>
            <img
              className="icon"
              src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/lock_l5sw35.png"
            />
          </Main.MiniCard>
          <Main.MiniCard>
            <img
              className="icon"
              src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/lock_l5sw35.png"
            />
          </Main.MiniCard>
        </Main.PlayerArea>
        <Main.Ranking
          as={motion.section}
          transition={{ delay: 1.5, duration: 1 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </Main>
    </Background>
  );
}
