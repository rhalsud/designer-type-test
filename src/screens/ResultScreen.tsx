import { Button, Chip, FlexBox, Thumbnail, Typography } from '@wanteddev/wds';
import { IconShare } from '@wanteddev/wds-icon';
import type { ResultType } from '../types';

interface ResultScreenProps {
  result: ResultType;
  onRestart: () => void;
}

const ResultScreen = ({ result, onRestart }: ResultScreenProps) => {
  return (
    <FlexBox
      flexDirection="column"
      sx={{ minHeight: '100dvh', padding: '48px 24px 24px', maxWidth: '420px', margin: '0 auto' }}
    >
      <Typography
        variant="label1"
        weight="bold"
        color="semantic.primary.normal"
        align="center"
        sx={{ marginBottom: '20px' }}
      >
        YOUR RESULT
      </Typography>

      <Thumbnail ratio="1:1" border radius sx={{ marginBottom: '24px' }} />

      <Typography variant="title1" weight="bold" align="center" sx={{ marginBottom: '12px' }}>
        {result.name}
      </Typography>
      <Typography
        variant="body1"
        color="semantic.label.alternative"
        align="center"
        sx={{ marginBottom: '20px' }}
      >
        {result.description}
      </Typography>

      <FlexBox flexWrap="wrap" justifyContent="center" gap="8px" sx={{ marginBottom: '40px' }}>
        {result.tags.map((tag) => (
          <Chip key={tag} size="medium" variant="outlined" disableInteraction>
            {tag}
          </Chip>
        ))}
      </FlexBox>

      <FlexBox flexDirection="column" gap="10px">
        <Button variant="solid" color="primary" size="large" fullWidth onClick={onRestart}>
          다시하기
        </Button>
        <Button
          variant="outlined"
          color="assistive"
          size="large"
          fullWidth
          leadingContent={<IconShare width={18} height={18} />}
          onClick={() => {}}
        >
          공유하기
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default ResultScreen;
