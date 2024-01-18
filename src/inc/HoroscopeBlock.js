
import React, { useState } from 'react';

const HoroscopeBlock = ({ logoSrc, signName, description, isActive, onClick }) => {
  return (
    <div className={`horoscope-block ${isActive ? 'active' : ''}`} onClick={onClick}>
      <img src={logoSrc} alt={signName} />
            <p className="sign-name">{signName}</p>

      {isActive && <p>{description}</p>}
    </div>
  );
};

const HoroscopePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const horoscopeData = [
    {
        logoSrc: require('../images/aries.png'),
        signName: 'Aries',
        description: "You need to reorganize your finances today, but make sure to take a few key precautions. Your interest in fiscal health is great (and timely), but it's not smart to tackle too many cost-cutting measures at the same time",
      },
      {
        logoSrc:require('../images/leo.png'),
        signName: 'Leo',
        description: "Enjoy all of life's pleasures today, from the greatest to the smallest. It's important that you're open-minded when appreciating the best things in life, whether you're walking barefoot in the park or living large in a stretch limo.",
      },
      {
        logoSrc: require('../images/scorpio.png'),
        signName: 'Scorpio',
        description: "Take time for yourself by putting your life on hold. Walk around the park, stare at the sky and otherwise refresh your senses with the parts of life that really matter. Sunshine and open space are vital for you now.",
      },
      {
        logoSrc: require('../images/pisces.png'),
        signName: 'Pisces',
        description: "Extravagance is everything for you now, and you're the best when it comes to living large and having fun. Your energy is stimulating your pleasure centers, but this influence could leave you feeling buyer's regret.",
      },
      {
        logoSrc: require('../images/libra.png'),
        signName: 'Libra',
        description:"Your energy powers up all the way, and now you feel like you can do anything. You look (and feel) fantastic, and this amazing, dynamic energy helps you in every aspect of your life. That could mean grabbing a sweet work assignment.",
      },
      {
        logoSrc: require('../images/gemini.png'),
        signName: 'Gemini',
        description: "Your energy is acting like a carnival barker now, exhorting one and all to step right up and check out the magnificence that is you! Thanks to their amazing performance, expect job prospects to multiply, enticing you to choose a sweet option right away.",
      },
      {
        logoSrc: require('../images/sagittarius.png'),
        signName: 'Sagittarius',
        description: "You need to get rid of any unrealistic goals and while you're at it, give that perfectionism a rest for the time being! They're nothing but a weight that keeps you down and prevents you from seeing real possibilities.",
      },
      {
        logoSrc: require('../images/cancer.png'),
        signName: 'Cancer',
        description: "You're so sweet-natured that others may make accidentally underestimate you. You shake all that up, though, when you turn one of your outrageous ideas into a firm reality. Now is a great time to marshal your forces and set up new partnerships.",
      },
      {
        logoSrc: require('../images/taurus.png'),
        signName: 'Taurus',
        description: "Resisting all efforts to change, no matter what, may feel somewhat cool at first, but it becomes increasingly unworkable for you, especially if you let your temper flare up as well. Why not decide to try serenity when everyone around you starts flinging mud?",
      },
      {
        logoSrc: require('../images/virgo.png'),
        signName: 'Aries',
        description: "A roadblock may appear in the form of a sudden impulse to gobble down a pile of salty junk food, blow off big deadlines to play a game or chase after some hottie who is bad for you. Stamp out those self-destructive urges as soon as you spot them!",
      },
      {
        logoSrc: require('../images/capricorn.png'),
        signName: 'Capricorn',
        description: "Everything smooths out when you just relax and trust in the universe. It's difficult to believe, but you don't actually have the last word on how things turn out. That ought to be welcome news since it means you can live your life instead of trying to steer it.",
      },
      {
        logoSrc: require('../images/aquarius.png'),
        signName: 'Aquarius',
        description: "Your freedom means everything to you, so you've set up your work or home life in such a way that you can come and go when you like. Sometimes, though, your lack of roots leaves you feeling a little lonely, or even misinformed.",
      },
  ];

  const handleBlockClick = (index) => {
    if(activeIndex=== index){
        setActiveIndex(null);
    }
    else{
        setActiveIndex(index);
    }
  };

  return (
    <div className="horoscope-page">
      <div className="horoscope-blocks">
        {horoscopeData.map((data, index) => (
          <HoroscopeBlock
            key={index}
            logoSrc={data.logoSrc}
            signName={data.signName}
            description={data.description}
            isActive={activeIndex === index}
            onClick={() => handleBlockClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HoroscopePage;








