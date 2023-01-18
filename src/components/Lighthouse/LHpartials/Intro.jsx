import { FadeRight } from '../../FadeComponents/FadeRight.jsx';

function Intro() {
  return (
    <FadeRight duration={3}>
      <p>This text will fade in on scroll</p>
    </FadeRight>
  );
}

export default Intro;

