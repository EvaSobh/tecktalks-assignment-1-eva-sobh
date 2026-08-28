import { tasks } from "@/data/tasks";


export async function GET() {
  return Response.json(
    {
      data: tasks,
    },
    {
      status: 200,
    }
  );
}



export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      typeof body.title !== "string" ||
      body.title.trim() === ""
    ) {
      return Response.json(
        {
          error: "Title is required",
        },
        {
          status: 400,
        }
      );
    }

    const newTask = {
      id:
        tasks.length > 0
          ? Math.max(...tasks.map((task) => task.id)) + 1
          : 1,
      title: body.title.trim(),
      completed: false,
    };

    tasks.push(newTask);

    return Response.json(
      {
        data: newTask,
      },
      {
        status: 201,
      }
    );
  } catch {
    return Response.json(
      {
        error: "Invalid request body",
      },
      {
        status: 400,
      }
    );
  }
}