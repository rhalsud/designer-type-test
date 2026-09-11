import { Button, FlexBox, Typography } from '@wanteddev/wds';
import { IconClock } from '@wanteddev/wds-icon';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  return (
    <FlexBox
      flexDirection="column"
      justifyContent="center"
      sx={{ minHeight: '100dvh', padding: '24px', maxWidth: '420px', margin: '0 auto' }}
    >
      <Typography
        variant="label1"
        weight="bold"
        color="semantic.primary.normal"
        sx={{ marginBottom: '12px' }}
      >
        DESIGNER TYPE TEST
      </Typography>
      <Typography variant="title1" weight="bold" sx={{ marginBottom: '12px' }}>
        나는 어떤 디자이너일까?
      </Typography>
      <Typography variant="body1" color="semantic.label.alternative" sx={{ marginBottom: '20px' }}>
        5가지 질문에 답하고 나의 디자이너 유형을 확인해보세요. 결과를 동료와 공유하며 서로의
        작업 스타일에 대해 이야기 나눠보세요.
      </Typography>
      <FlexBox alignItems="center" gap="6px" sx={{ marginBottom: '32px' }}>
        <IconClock width={18} height={18} />
        <Typography variant="label2" color="semantic.label.assistive">
          예상 소요 시간 1분
        </Typography>
      </FlexBox>
      <Button variant="solid" color="primary" size="large" fullWidth onClick={onStart}>
        테스트 시작하기
      </Button>
    </FlexBox>
  );
};

export default IntroScreen;
