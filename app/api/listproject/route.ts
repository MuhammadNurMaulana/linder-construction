import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const project = data.find((item) => item.id === Number(id));
    if (project) {
      return NextResponse.json({ status: true, message: "Fetching Data API Success", data: project });
    }
    return NextResponse.json({ status: false, message: "Fetching Data API Failed", data: {} });
  }

  return NextResponse.json({ status: true, message: "Fetching Data API Failed", data });
}

const data = [
  {
    id: 1,
    img: "/images/main1.webp",
    title: "Service Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit!",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },

  {
    id: 2,
    img: "/images/main5.webp",
    title: "Service Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.dolor sit amet",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 3,
    img: "/images/main3.webp",
    title: "Service Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo. Nisi, quidem.",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 4,
    img: "/images/blog4.webp",
    date: "July 10, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 5,
    img: "/images/blog5.webp",
    date: "August 13, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 6,
    img: "/images/blog6.webp",
    date: "September 25, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },

  {
    id: 7,
    img: "/images/blog1.webp",
    date: "January 10, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit!",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },

  {
    id: 8,
    img: "/images/blog2.webp",
    date: "May 9, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.dolor sit amet",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 9,
    img: "/images/blog3.webp",
    date: "June 4, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo. Nisi, quidem.",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 10,
    img: "/images/blog4.webp",
    date: "July 10, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 11,
    img: "/images/blog5.webp",
    date: "August 13, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 12,
    img: "/images/blog6.webp",
    date: "September 25, 2023 | Category",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
];
