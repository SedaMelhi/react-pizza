import style from './NotFound.module.sass';
const NotFound = () => {
  return (
    <div className={'content ' + style.notFoundBlock}>
      <span>😕</span>
      <h2 className={style.title}>Ничего не найдено</h2>
      <p className="description">
        К сожалению данная страница отсутсвует в нашем интернет-магазине.
      </p>
    </div>
  );
};

export default NotFound;
