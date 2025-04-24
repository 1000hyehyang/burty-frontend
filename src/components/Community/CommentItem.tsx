// 📄 components/Community/CommentItem.tsx
import styled from "styled-components";
import LikeButton from "../Common/LikeButton";
import { MdReport } from "react-icons/md";
import Badge from "../Common/Badge";
import { getTimeAgo } from "../../utils/timeAgo";
import { useUserStore } from "../../store/user/useUserStore";
import { useCommunityStore, CommunityComment } from "../../store/community/useCommunityStore";

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
}

const CommentItem = ({ comment }: Props) => {
  const currentNickname = useUserStore((state) => state.nickname);
  const likeComment = useCommunityStore((state) => state.likeComment);
  const isMyComment = comment.author.nickname === currentNickname;

  const handleEdit = () => {
    alert("댓글 수정 기능은 추후 구현됩니다.");
  };

  const handleDelete = () => {
    alert("댓글 삭제 기능은 추후 구현됩니다.");
  };

  const handleReport = () => {
    alert("댓글이 신고되었습니다.");
  };

  const handleLike = () => {
    likeComment(comment.commentId);
  };

  return (
    <Wrapper>
      <ProfileImage src={comment.author.profileImage || "/default-profile.png"} />
      <ContentBox>
        <TopRow>
          <Nickname>{comment.author.nickname}</Nickname>
          <Badge type="primary" size="small">{comment.author.ageGroup}</Badge>
          <Badge type="primary" size="small">{comment.author.region}</Badge>
          <Badge type="primary" size="small">{comment.author.job}</Badge>
        </TopRow>
        <Time>{getTimeAgo(comment.createdAt)}</Time>
        <CommentText>{comment.content}</CommentText>

        <BottomRow>
          <ButtonGroupLeft>
            {isMyComment && (
              <>
                <EditButton onClick={handleEdit}>수정하기</EditButton>
                <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
              </>
            )}
          </ButtonGroupLeft>

          <ButtonGroupRight>
            <LikeButton initialLikes={comment.likes} onClick={handleLike} fontSize={13} iconSize={14} />
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
