import { FadeLeft } from '../../FadeComponents/FadeLeft.jsx';

function Title() {
  return (
    <FadeLeft duration={3}>
      <p>This text will fade in on scroll</p>
    </FadeLeft>
  );
}

export default Title;

