import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const projects = data.find((item) => item.id === Number(id));

    if (projects) {
      return NextResponse.json({ status: true, message: "Success", data: projects });
    }

    return NextResponse.json({ status: false, message: "Failed", data: {} });
  }

  return NextResponse.json({ status: true, message: "Success", data: data });
}

const data = [
  {
    id: 1,
    img: "/images/main1.webp",
    alt: "Image of project 1",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit!",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },

  {
    id: 2,
    img: "/images/main5.webp",
    alt: "Image of project 2",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.dolor sit amet",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 3,
    img: "/images/main3.webp",
    alt: "Image of project 3",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo. Nisi, quidem.",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 4,
    img: "/images/project1.webp",
    alt: "Image of project 4",
    title: "Service Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 5,
    img: "/images/project2.webp",
    alt: "Image of project 5",
    title: "Service Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 6,
    img: "/images/project5.webp",
    alt: "Image of project 6",
    title: "Service Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 7,
    img: "/images/service2.webp",
    alt: "Image of project 7",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 8,
    img: "/images/service3.webp",
    alt: "Image of project 8",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 9,
    img: "/images/service4.webp",
    alt: "Image of project 9",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 10,
    img: "/images/services1.webp",
    alt: "Image of project 10",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 11,
    img: "/images/services2.webp",
    alt: "Image of project 11",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 12,
    img: "/images/services3.webp",
    alt: "Image of project 12",
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
];
