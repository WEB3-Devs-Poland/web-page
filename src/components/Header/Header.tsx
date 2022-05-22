import { MobileMenuContext, MobileMenuContextStateType } from 'providers/MobileMenuProvider';
import { useCallback, useContext, useState } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import darkThemeLogo from 'assets/logo/web3-dark-theme.png';
import lightThemeLogo from 'assets/logo/web3-light-theme.png';
import ChangeLanguage from 'components/ChangeLanguage';
import ChangeTheme from 'components/ChangeTheme';
import { NavigationLinks, SocialLinks } from 'components/Header/header.config';
import RenderIf from 'components/RenderIf';
import { basicTheme } from 'config/theme.config';
import useWindowChangeEvent from 'hooks/useWindowChangeEvent';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';
import { goToSection } from 'utilities/goToSection';

import * as S from './Header.styles';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;
  const { changeMenuVisibility } = useContext(MobileMenuContext) as MobileMenuContextStateType;

  const updateWindowWidth = useCallback(() => setWindowWidth(window.innerWidth), []);

  useWindowChangeEvent(updateWindowWidth, true);

  return (
    <S.Header>
      <Link to="/">
        <S.Logo
          src={currentTheme === 'light' ? lightThemeLogo : darkThemeLogo}
          alt="WEB3 Devs Poland"
        />
      </Link>

      <RenderIf isTrue={windowWidth > basicTheme.maxWidth}>
        <S.Menu>
          {NavigationLinks().map(({ title, link, componentType }) => (
            <>
              {componentType === 'section' ? (
                <p key={link} onClick={() => goToSection(link)}>
                  {title}
                </p>
              ) : (
                <Link to={link} key={link} onClick={() => goToSection(link)}>
                  {title}
                </Link>
              )}
            </>
          ))}

          <S.VerticalSeparator />

          {SocialLinks.map(({ Icon, name, link }) => (
            <a key={name} href={link} target="blank">
              <Icon />
            </a>
          ))}

          <S.VerticalSeparator />

          <ChangeLanguage />
          <ChangeTheme />
        </S.Menu>
      </RenderIf>

      <RenderIf isTrue={windowWidth <= basicTheme.maxWidth}>
        <RiMenuFill onClick={changeMenuVisibility} />
      </RenderIf>
    </S.Header>
  );
};

export default Header;
