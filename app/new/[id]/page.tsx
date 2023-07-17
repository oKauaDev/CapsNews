"use client";

import Navbar from "@/components/Navbar/Navbar";
import { New } from "@/types/News";
import { news } from "@/services/Api";
import React from "react";
import { useRouter } from "next/navigation";
import typeColors from "@/constants/typeColors";
import moment from "moment";
import "moment/locale/pt-br";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default function New({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [myNew, setMyNew] = React.useState<New>();
  moment.locale("pt-br");

  React.useEffect(() => {
    news()
      .get(params.id)
      .then((data) => {
        if (+data.status == 200) {
          setMyNew(data.data);
        } else {
          router.push("/");
        }
      })
      .catch(() => {
        router.push("/");
      });
  }, [params, router]);

  // Adicionando uma view ao post.
  React.useEffect(() => {
    news().view(params.id);
  }, [params.id]);

  function timePosted(time: number) {
    const actualTime = moment(new Date().getTime());
    const timeSend = moment(time * 1000);
    const diference = actualTime.diff(timeSend);

    return moment.duration(diference).humanize();
  }

  function timeToRead(time: number) {
    return moment.duration(time * 1000).humanize();
  }

  return (
    <>
      <Navbar />
      <section className="anime-left mx-vw304 tablet:mx-vw128 mt-[13.333vh] mb-8">
        <div className="flex gap-2 items-center mb-1">
          <p className="px-2 py-1 bg-primary-300 text-secundary-100 w-min rounded-sm mr-3">
            {myNew?.content[0].user}
          </p>
          <p className="text-secundary-800 leading-5">
            {myNew?.views ?? 0 + 1} Views
          </p>
          <span className="w-[2px] h-[2px] bg-secundary-800 block" />
          <p className="text-secundary-800 leading-5">
            {myNew?.content.length} Comentários
          </p>
        </div>
        <div className="mb-16 flex gap-3 items-center">
          <span
            className="w-2 h-2 block rounded-full"
            style={{ background: typeColors[myNew?.type ?? ""] ?? "#6F7780" }}
          />
          <h1 className="text-40px font-medium leading-tight tracking-wider text-secundary-1000">
            {myNew?.title}
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          {myNew?.content?.map((message, index) => {
            return (
              <div key={index} className="bg-secundary-100 py-8 px-5">
                <div className="flex gap-2 items-center mb-8">
                  <p className="px-2 py-1 bg-primary-300 text-secundary-100 w-min rounded-sm mr-3">
                    {message.user}
                  </p>
                  <p className="text-secundary-800 leading-5">
                    {timeToRead(message.timeToRead)} de leitura
                  </p>
                  <span className="w-[2px] h-[2px] bg-secundary-800 block" />
                  <p className="text-secundary-800 leading-5">
                    á {timePosted(message.time)}
                  </p>
                </div>
                <ReactMarkdown
                  className="break-all"
                  remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
