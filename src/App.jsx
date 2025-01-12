import AnimationRevealPage from './helpers/AnimationRevealPage'
import { FullWidthWithImage as Hero } from './components/hero/FullWidthWithImage'
import { useTranslation } from 'react-i18next'

function App() {

  const { i18n, t } = useTranslation();

  return (
    <>
      <AnimationRevealPage>
        <Hero
          description={t('description')}
        />
      </AnimationRevealPage>
    </>
  )
}

export default App
