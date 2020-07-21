import { Head, styled, mq } from 'global'

const Logo = styled.img`
  width: 300px;
  height: auto;

  ${mq.below('sm')} {
    width: 200px;
  }
`

const Subtitle = styled.p`
  margin: 25px 0 0;
  padding: 0 0 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  ${mq.below('sm')} {
    font-size: 1.3rem;
  }
`

const Contact = styled.span`
  margin: 20px 0;
  a {
    font-weight: bold;
  }
`

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SocialLink = styled.a`
  width: 24px;
  height: auto;
  margin: 0 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: auto;
  }
`

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bykess.nl - Under Construction</title>
      </Head>

      <main>
        <Logo src="/assets/img/bykess_logo_white.svg" alt="Bykess Logo White" />

        <Subtitle className="description">
          Our website is under construction.
        </Subtitle>

        <Contact>
          Send us a <a href="mailto:info@bykess.nl">message</a> in the meantime
        </Contact>
        <Socials>
          <SocialLink href="mailto:info@bykess.nl">
            <img
              src="/assets/img/icons/mail_white.svg"
              alt="Mail icon link for Bykess"
            />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/bykess.nl/"
            target="_blank"
          >
            <img
              src="/assets/img/icons/instagram_white.svg"
              alt="Instagram icon link for Bykess"
            />
          </SocialLink>
          {/* <SocialLink
            href="https://www.facebook.com/Bykess-153011568161825/"
            target="_blank"
          >
            <img
              src="/assets/img/icons/facebook_white.svg"
              alt="Facebook icon link for Bykess"
            />
          </SocialLink> */}
        </Socials>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          /* mobile viewport bug fix */
          min-height: -webkit-fill-available;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          body {
            padding: 0 20px;
          }

          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
