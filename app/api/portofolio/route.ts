import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  if (id) {
    const projects = data.find((item) => item.id === Number(id));

    if (projects) {
      return NextResponse.json({ status: true, message: "Fetching Data API Success", data: projects });
    }

    return NextResponse.json({ status: false, message: "Fetching Data API Failed", data: {} });
  }

  return NextResponse.json({ status: true, message: "Fetching Data API Success", data: data });
}

const data = [
  {
    id: 1,
    img: "/images/project7.jpg",
    alt: "project Seven",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit!",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },

  {
    id: 2,
    img: "/images/project8.jpg",
    alt: "project Eight",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.dolor sit amet",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 3,
    img: "/images/project9.jpg",
    alt: "project nine",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo. Nisi, quidem.",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 4,
    img: "/images/project10.jpg",
    alt: "project ten",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem. Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 5,
    img: "/images/project11.jpg",
    alt: "project eleven",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
  {
    id: 6,
    img: "/images/project12.jpg",
    alt: "project twelve",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem.eiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto ab, aperiam labore at, facilis natus fugiat velit tempora dolor officiis sint. Laborum, tempore! Blanditiis laudantium illo reprehenderit! Natus, autem! Reiciendis quas recusandae, eveniet obcaecati impedit rem! Quia reiciendis, officiis velit fugit quos suscipit maiores explicabo, fuga, quasi dolorum distinctio!",
  },
];
