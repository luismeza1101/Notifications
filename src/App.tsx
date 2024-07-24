import { useContext, useEffect, useState } from "react";
import "./App.css";
import CardNotification from "./components/CardNotification";
import { NotyContext } from "./context/Context";

function App() {
  const [notiNotRead, setNotiNotRead] = useState(0);
  const context = useContext(NotyContext);

  if(!context) return

  const {notys, setNotys} = context;

  const markAllRead = () => {
    setNotys(notys.map(noty => ({...noty, read: true})))
  }

  useEffect(() => {
    setNotiNotRead(notys.filter((noty) => noty.read == false).length);
  }, [notys]);

  return (
    <>
      <section className="w-full mx-auto my-4 p-6 desktop:w-4/5 desktop:shadow-2xl xl:w-2/3">
        <div className="flex place-content-between items-center">
          <h3 className="text-2xl font-bold">
            Notifications{" "}
            <span className="bg-[#093375] px-3 py-[3px] text-white rounded-lg text-xl">
              {notiNotRead}
            </span>
          </h3>
          <span className="text-slate-400 cursor-pointer duration-200 hover:text-slate-700" onClick={markAllRead}>Mark all as read</span>
        </div>
        <div className="grid gap-3 my-5">
          {notys.map((noti) => (
            <CardNotification
              name={noti.name}
              message={noti.message}
              date={noti.date}
              privMessage={noti.privMessage}
              pictureCommet={noti.pictureCommet}
              read={noti.read}
              key={noti.name}
            />
          ))}
        </div>
      </section>
      <span className="block text-center my-8">Challenge by Frontend Mentor. Coded by Luis Meza.</span>
    </>
  );
}

export default App;
