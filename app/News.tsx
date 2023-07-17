import typeColors from "@/constants/typeColors";
import { news } from "@/services/Api";
import { filters } from "@/types/Context";
import { New } from "@/types/News";
import Link from "next/link";
import React from "react";

const News = ({ type, p, m }: { type: filters; p: number; m: number }) => {
  const [data, setData] = React.useState<New[]>([]);

  React.useEffect(() => {
    news()
      .getAll(type, p, m)
      .then((data) => {
        if (+data.status == 200) {
          setData(data.data);
        }
      });
  }, [type, p, m]);

  function getColor(type: string) {
    return typeColors[type] ?? "#6F7780";
  }

  return (
    <div className="mx-vw304 mt-24 flex flex-col gap-8 anime-left tablet:mx-vw128">
      {data.map((myNew, i) => {
        return (
          <Link
            href={`/new/${myNew.link}`}
            key={myNew.id}
            className="grid grid-cols-[2px_1fr] gap-5 cursor-pointer"
          >
            <span
              className="w-full h-full block"
              style={{ background: getColor(myNew.type) }}
            />
            <div>
              <h2 className="text-24px font-medium tracking-wide mb-2">
                {i + 1}. {myNew.title}
              </h2>
              <div className="flex gap-2 items-center">
                <p className="text-secundary-800 leading-5">
                  {myNew.views} Views
                </p>
                <span className="w-[2px] h-[2px] bg-secundary-800 block" />
                <p className="text-secundary-800 leading-5">
                  {myNew.content.length} comentários
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default News;
