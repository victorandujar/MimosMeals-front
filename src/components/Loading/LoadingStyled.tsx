import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 350px;
  background-color: #fff;

  .superballs {
    --uib-size: 45px;
    --uib-speed: 1.4s;
    --uib-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--uib-size);
    width: var(--uib-size);
  }

  .superballs__dot {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
  }

  .superballs__dot::before {
    content: "";
    height: 30%;
    width: 30%;
    border-radius: 50%;
    background-color: var(--uib-color);
    will-change: transform;
    flex-shrink: 0;
  }

  .superballs__dot:nth-child(1) {
    transform: rotate(45deg);
  }

  .superballs__dot:nth-child(1)::before {
    animation: orbit var(--uib-speed) linear calc(var(--uib-speed) * -0.143)
      infinite;
  }

  .superballs__dot:nth-child(2) {
    transform: rotate(-45deg);
  }

  .superballs__dot:nth-child(2)::before {
    animation: orbit var(--uib-speed) linear calc(var(--uib-speed) / -2)
      infinite;
  }

  @keyframes orbit {
    0% {
      transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
      opacity: 0.65;
    }
    5% {
      transform: translate(calc(var(--uib-size) * 0.4)) scale(0.684208);
      opacity: 0.58;
    }
    10% {
      transform: translate(calc(var(--uib-size) * 0.3)) scale(0.631576);
      opacity: 0.51;
    }
    15% {
      transform: translate(calc(var(--uib-size) * 0.2)) scale(0.578944);
      opacity: 0.44;
    }
    20% {
      transform: translate(calc(var(--uib-size) * 0.1)) scale(0.526312);
      opacity: 0.37;
    }
    25% {
      transform: translate(0%) scale(0.47368);
      opacity: 0.3;
    }
    30% {
      transform: translate(calc(var(--uib-size) * -0.1)) scale(0.526312);
      opacity: 0.37;
    }
    35% {
      transform: translate(calc(var(--uib-size) * -0.2)) scale(0.578944);
      opacity: 0.44;
    }
    40% {
      transform: translate(calc(var(--uib-size) * -0.3)) scale(0.631576);
      opacity: 0.51;
    }
    45% {
      transform: translate(calc(var(--uib-size) * -0.4)) scale(0.684208);
      opacity: 0.58;
    }
    50% {
      transform: translate(calc(var(--uib-size) * -0.5)) scale(0.73684);
      opacity: 0.65;
    }
    55% {
      transform: translate(calc(var(--uib-size) * -0.4)) scale(0.789472);
      opacity: 0.72;
    }
    60% {
      transform: translate(calc(var(--uib-size) * -0.3)) scale(0.842104);
      opacity: 0.79;
    }
    65% {
      transform: translate(calc(var(--uib-size) * -0.2)) scale(0.894736);
      opacity: 0.86;
    }
    70% {
      transform: translate(calc(var(--uib-size) * -0.1)) scale(0.947368);
      opacity: 0.93;
    }
    75% {
      transform: translate(0%) scale(1);
      opacity: 1;
    }
    80% {
      transform: translate(calc(var(--uib-size) * 0.1)) scale(0.947368);
      opacity: 0.93;
    }
    85% {
      transform: translate(calc(var(--uib-size) * 0.2)) scale(0.894736);
      opacity: 0.86;
    }
    90% {
      transform: translate(calc(var(--uib-size) * 0.3)) scale(0.842104);
      opacity: 0.79;
    }
    95% {
      transform: translate(calc(var(--uib-size) * 0.4)) scale(0.789472);
      opacity: 0.72;
    }
    100% {
      transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
      opacity: 0.65;
    }
  }
`;

export default LoadingStyled;
