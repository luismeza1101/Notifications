import { useContext } from "react";
import { Notifications } from "../data";
import { NotyContext } from "../context/Context";

const CardNotification: React.FC<Notifications> = ({
  name,
  message,
  date,
  privMessage,
  pictureCommet,
  read,
}) => {

  const context = useContext(NotyContext);

  if(!context) return

  const {setNotys, notys} = context;

  const readNoty = () => {
    const newData = notys.map(noty => noty.name == name ? {...noty, read: true} : noty)
    setNotys(newData)
  }
  const cleanName = name.replace("-", " ");

  return (
    <div className={`flex-col cursor-pointer ${read ? '' : 'bg-slate-100 rounded-xl'}`} onClick={readNoty}>
      <div className='flex p-2 gap-7 items-center'>
        <img
          src={`../images/avatar-${name}.webp`}
          alt="Usuario"
          className="h-14"
        />
        <div>
          <div>
            <span className="capitalize font-bold">{cleanName}</span> {message} {read ? null : <p className="inline-block bg-red-600 w-2 h-2 rounded"></p>}
          </div>
          <span className="text-[#a1a5ad]">{date}</span>
        </div>
        {pictureCommet ? <img src={`../images/image-${pictureCommet}.webp`} className="h-14 ml-auto"/> : null}
      </div>
        {privMessage ? (
        <p className="w-3/4 p-2 rounded-2xl border-solid border-2 border-slate-400 ml-[20%] mb-3">
          {privMessage}
        </p>
      ) : null}
    </div>
  );
};

export default CardNotification;
