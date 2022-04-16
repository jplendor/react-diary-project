const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date,
  onRemove,
}) => {
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정 점수 : {emotion}
        </span>
        <br />
        <span className="date">
          작성 시간(ms) : {new Date(created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">{content}</div>
      <div className="button">
        <button onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
};

export default DiaryItem;
