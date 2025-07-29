import { useGetRooms } from "@/hooks/get-rooms";
import { Link } from "react-router-dom";

export function CreateRoom() {
  const { data, isLoading } = useGetRooms();

  return (
    <div>
      <p>Create a new room</p>

      {isLoading && <p>carregando...</p>}

      <div className="flex flex-col gap-2">
        <ul>
          {data?.map((room) => (
            <li key={room.id}>
              <Link to={`/room/${room.id}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
