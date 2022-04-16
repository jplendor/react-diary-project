const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date,
  onDelete,
}) => {
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
        <button
          onClick={() => {
            if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
              onDelete(id);
            }
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default DiaryItem;
