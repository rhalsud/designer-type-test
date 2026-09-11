import {
  Button,
  FlexBox,
  ProgressIndicator,
  TopNavigation,
  TopNavigationButton,
  Typography,
} from '@wanteddev/wds';
import { IconArrowLeft } from '@wanteddev/wds-icon';
import { QUESTIONS } from '../data';
import type { ResultTypeId } from '../types';

interface QuizScreenProps {
  currentIndex: number;
  onAnswer: (type: ResultTypeId) => void;
  onBack: () => void;
}

const QuizScreen = ({ currentIndex, onAnswer, onBack }: QuizScreenProps) => {
  const question = QUESTIONS[currentIndex];
  const total = QUESTIONS.length;
  const percent = (currentIndex / total) * 100;

  return (
    <FlexBox
      flexDirection="column"
      sx={{ minHeight: '100dvh', maxWidth: '420px', margin: '0 auto' }}
    >
      <TopNavigation
        leadingContent={
          <TopNavigationButton variant="icon" onClick={onBack}>
            <IconArrowLeft />
          </TopNavigationButton>
        }
      />
      <FlexBox flexDirection="column" sx={{ padding: '0 24px 24px' }}>
        <ProgressIndicator percent={percent} sx={{ marginBottom: '12px' }} />
        <Typography
          variant="label2"
          weight="medium"
          color="semantic.label.assistive"
          sx={{ marginBottom: '24px' }}
        >
          {currentIndex + 1} / {total}
        </Typography>
        <Typography variant="title2" weight="bold" sx={{ marginBottom: '32px' }}>
          {question.text}
        </Typography>
        <FlexBox flexDirection="column" gap="12px">
          {question.options.map((option) => (
            <Button
              key={option.label}
              variant="outlined"
              color="assistive"
              size="large"
              fullWidth
              sx={{ justifyContent: 'flex-start', textAlign: 'left', height: 'auto', padding: '18px 20px' }}
              onClick={() => onAnswer(option.type)}
            >
              {option.label}
            </Button>
          ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default QuizScreen;
