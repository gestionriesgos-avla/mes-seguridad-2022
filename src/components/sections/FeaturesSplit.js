import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Talleres express',
    paragraph: 'Inscríbete a nuestros talleres express y realiza los desafíos para acumular puntos, cada uno cuenta con dos fechas. ¡No te pierdas esta gran oportunidad de aprender!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Taller Express 1
                  </div>
                <a href='https://forms.gle/nCf2gAdywhYiYeVW9' target="_blank"><h3 className="mt-0 mb-12">
                  Fundamentos de seguridad
                  </h3></a>
                <p className="m-0">
                  Se abarcarán los conceptos claves de seguridad y la triada de la información. Además, revisaremos casos reales de ataques.
                </p>
                <br/>
                <Button tag="a" color="secondary" wideMobile href="https://forms.gle/nCf2gAdywhYiYeVW9" target="_blank">
                    Inscríbete aquí
                </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/fundamentos.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Taller express 2
                  </div>
                  <a href='https://forms.gle/PrfPGacyto6wvjBAA' target="_blank"><h3 className="mt-0 mb-12">
                  Gestión de incidencias y tendencias en ciberseguridad
                  </h3></a>
                <p className="m-0">
                  Se abarcará el procedimiento de incidentes, tipos de incidentes y como reportarlos en AVLA. También temas asociados como phishing, vishing y cómo prevenirlos.
                </p>
                <br/>
                <Button tag="a" color="secondary" wideMobile href="https://forms.gle/PrfPGacyto6wvjBAA" target="_blank">
                    Inscríbete aquí
                </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/tendencias.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;