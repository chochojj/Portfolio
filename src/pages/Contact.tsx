import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface BubbleProps {
  randomNumber: number;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const bubbleRef = useRef<HTMLSpanElement | null>(null);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const BubbleUp: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bubbleRef.current!.style.animationPlayState = "running";
        } else {
          bubbleRef.current!.style.animationPlayState = "paused";
        }
      });
    };

    const observer = new IntersectionObserver(BubbleUp, options);
    observer.observe(bubbleRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);
  const randomNumbers = Array.from(
    { length: 26 },
    () => Math.floor(Math.random() * 17) + 10
  );

  return (
    <Wrap>
      <Bubble>
        {randomNumbers.map((randomNumber, index) => (
          <BubbleSpan
            ref={bubbleRef}
            key={index}
            data-i={index}
            className={String(index)}
            randomNumber={randomNumber}
          />
        ))}
      </Bubble>
      <Title>
        <Text>Contact</Text>
        <Line />
      </Title>
      <Content>
        <MailBox>
          <MailTo>
            {isEmailSent && (
              <SentMailMessage>메일이 보내졌습니다!</SentMailMessage>
            )}
            <span>궁금한 부분이 있으시다면</span>
            <span>편하게 메일 주세요</span>
          </MailTo>

          <Form
            onSubmit={handleSubmit(async (data) => {
              await new Promise((r) => setTimeout(r, 1000));
              setIsEmailSent(true);
            })}
            method="POST"
            action="https://script.google.com/macros/s/AKfycbywqwt41TZysEW33MmuvlbkvJHT875ct8BKSwJbaQwz_nvum4SYVS1dz2Wb-p0Y0taGZw/exec"
            target="none"
          >
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
            {errors.email && (
              <small role="alert">이메일을 다시 확인해 주세요</small>
            )}
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              placeholder="내용을 입력해 주세요"
              {...register("content", {
                required: "내용을 채워주세요😥",
              })}
            />
            {errors.content && (
              <small role="alert">내용을 다시 확인해 주세요</small>
            )}
            <button type="submit" disabled={isSubmitting}>
              메일 보내기
            </button>
          </Form>
          <iframe name="none" style={{ display: "none" }}></iframe>
        </MailBox>
      </Content>
    </Wrap>
  );
};

export default Contact;

const bubble = keyframes`
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
`;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const Bubble = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  z-index: -10;
`;

const BubbleSpan = styled.span<BubbleProps>`
  position: relative;
  width: 30px;
  height: 30px;
  background: #e4a8a8;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #e4a8a844, 0 0 50px #e4a8a8, 0 0 100px #e4a8a8;
  animation: ${bubble} 15s linear infinite;
  animation-duration: ${(props) => `calc(125s / ${props.randomNumber})`};

  &:nth-child(even) {
    background: #ffddab;
    box-shadow: 0 0 0 10px #ffddab44, 0 0 50px #ffddab, 0 0 100px #ffddab;
  }
`;

const Title = styled.div`
  width: 380px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 1320px) {
    width: 320px;
  }

  @media screen and (max-width: 850px) {
    width: 240px;
  }

  @media screen and (max-width: 410px) {
    width: 180px;
  }
  @media screen and (max-width: 410px) {
    width: 150px;
  }

  @media only screen and (max-height: 770px) {
    width: 300px;
  }
  @media only screen and (max-height: 770px) and (max-width: 500px) {
    width: 200px;
  }
`;

const Text = styled.span`
  font-size: 80px;
  color: #1f485e;
  font-weight: bold;
  -webkit-text-stroke: 2px white;
  font-family: sans-serif;
  margin-top: 50px;
  padding-right: 30px;
  letter-spacing: 3px;

  @media screen and (max-width: 1320px) {
    font-size: 50px;
    margin-top: 20px;
  }
  @media screen and (max-width: 850px) {
    -webkit-text-stroke: 1px white;
    margin-top: 10px;
    font-size: 40px;
    padding-right: 15px;
  }

  @media screen and (max-width: 410px) {
    font-size: 25px;
    color: white;
    font-weight: normal;
  }

  @media only screen and (max-height: 770px) {
    font-size: 50px;
    margin-top: 10px;
  }
  @media only screen and (max-height: 770px) and (max-width: 500px) {
    font-size: 30px;
    margin-top: 10px;
  }
`;

const Line = styled.div`
  width: 380px;
  height: 10px;
  margin-top: 15px;
  margin-bottom: 25px;
  border-bottom: 3px solid white;

  @media screen and (max-width: 850px) {
    margin-top: 5px;
    margin-bottom: 15px;
  }

  @media only screen and (max-height: 770px) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  @media only screen and (max-height: 770px) and (max-width: 500px) {
    border-bottom: 2px solid white;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MailBox = styled.section`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
  color: #1f485e;

  @media screen and (max-width: 720px) {
    margin: 0 10px;
  }
`;

const SentMailMessage = styled.span`
  background-color: #e4a8a8;
  padding: 2px 3px;
  margin-bottom: 10px;
  font-size: 15px;
`;
const MailTo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  span {
    color: #1f485e;
    margin-bottom: 3px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  label {
    margin-top: 15px;
    margin-bottom: 5px;
    color: #292929;
    font-weight: 600;
  }

  textarea {
    resize: none;
    height: 180px;
  }

  button {
    border: none;
    padding: 7px 0px;
    border-radius: 3px;
    background-color: #1f485e;
    font-size: 16px;
    margin-top: 20px;
  }
`;
