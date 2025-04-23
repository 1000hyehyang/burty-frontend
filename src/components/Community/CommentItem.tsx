// 📄 components/Community/CommentItem.tsx
import styled from "styled-components";
import LikeButton from "../Common/LikeButton";
import { MdReport } from "react-icons/md";
import { CommunityComment } from "../../mock/communityComments";
import Badge from "../Common/Badge";
import { getTimeAgo } from "../../utils/timeAgo";

const Wrapper = styled.div`
  background: var(--variable-collection-bg-100);
  padding: 14px 16px;
  border-radius: 14px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;

const ContentBox = styled.div`
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const Nickname = styled.span`
  font-weight: 600;
  font-size: 13px;
`;

const Time = styled.div`
  font-size: 11px;
  color: #aaa;
  margin-top: 2px;
`;

const CommentText = styled.p`
  font-size: 12px;
  color: var(--variable-collection-text-300);
  margin: 8px 0 12px;
  line-height: 1.4;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  color: #999;
`;

const ButtonGroupLeft = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ButtonGroupRight = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const IconButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #aaa;

  svg {
    font-size: 14px;
  }

  &:hover {
    color: var(--variable-collection-action-negative);
  }
`;

const EditButton = styled.button`
  background: #fff;
  padding: 4px 10px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
`;

const DeleteButton = styled(EditButton)`
  background: #fdd9d9;
  color: var(--variable-collection-action-negative);
`;

interface Props {
  comment: CommunityComment;
  currentUserNickname?: string; // 현재 로그인된 사용자 닉네임
}

const CommentItem = ({ comment, currentUserNickname }: Props) => {
  const isMyComment = comment.nickname === currentUserNickname;

  const handleReport = () => {
    alert("신고되었습니다.");
  };

  const handleEdit = () => {
    alert("수정하기 기능은 추후 구현 예정입니다.");
  };

  const handleDelete = () => {
    alert("삭제하기 기능은 추후 구현 예정입니다.");
  };

  return (
    <Wrapper>
      <ProfileImage src="/default-profile.png" alt="프로필 이미지" />
      <ContentBox>
        <TopRow>
          <Nickname>{comment.nickname}</Nickname>
          <Badge type="primary" size="small">{comment.ageGroup}</Badge>
          <Badge type="primary" size="small">{comment.location}</Badge>
          <Badge type="primary" size="small">{comment.job}</Badge>
        </TopRow>
        <Time>{getTimeAgo(comment.createdAt)}</Time>
        <CommentText>{comment.content}</CommentText>

        <BottomRow>
          {/* 왼쪽: 내 댓글이면 수정/삭제 */}
          <ButtonGroupLeft>
            {isMyComment && (
              <>
                <EditButton onClick={handleEdit}>수정하기</EditButton>
                <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
              </>
            )}
          </ButtonGroupLeft>

          {/* 오른쪽: 좋아요 + 신고 */}
          <ButtonGroupRight>
            <LikeButton initialLikes={comment.likes} fontSize={13} iconSize={14} />
            <IconButton onClick={handleReport}>
              <MdReport /> 신고하기
            </IconButton>
          </ButtonGroupRight>
        </BottomRow>
      </ContentBox>
    </Wrapper>
  );
};

export default CommentItem;
