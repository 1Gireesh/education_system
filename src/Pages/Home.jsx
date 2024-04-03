import React from 'react'
import '../Styles/Home.css'
import ColoredTag from '../Components/ColoredTag'
import { apples, bookIcon, foodsImg, headSuitIcon, milk, oil, paperIcon, peanut, plusIconGreen, plusIconRed, plusIconYellow, tickIcon, water, yoghurt } from '../assets'

export default function Home() {

  const levels = [
    { icon: bookIcon, title: 'Chassidisher Bochur', progress: 20, locked: false },
    { icon: paperIcon, title: 'Chassidisher Bochur', progress: 18, locked: false },
    { icon: headSuitIcon, title: 'Chassidisher Bochur', progress: 10, locked: true }
  ];

  const items = [
    { name: 'Apples', image: apples, streak: 2 },
    { name: 'Peanut', image: peanut, streak: 0 },
    { name: 'Yoghurt', image: yoghurt, streak: 1 },
    { name: 'Water', image: water, streak: 3 },
    { name: 'Oil', image: oil, streak: 4 },
    { name: 'Milk', image: milk, streak: 0 }
  ]

  const streakCoatPerStreak = {
    0: 'You are just getting started!',
    1: 'You are making nice progress!',
    2: 'You are getting close!',
    3: 'You have almost mastered this word!',
    4: 'You have mastered this word!',
    5: 'You have mastered this word!'
  };

  return (
    <div className='dashboard'>
      <div className='dashboard_left'>
        <div className='question_title'>Question</div>
        <div className='question'>
          This is Laibel at the supermarket, buying food for a party at his house. Can you help Laibel find the {<ColoredTag text={"Oil"} color='#F03636' />}, {<ColoredTag text='Bread' color='#706EEB' />} bread and {<ColoredTag text='Water' color='#40916C' />} water?
        </div>
        <div className='food_list'>
          <img src={''} alt="" />
          <div className='food_items'>
            {
              items.map((item, index) => (
                <img key={index} src={item.image} alt="" />
              ))
            }
          </div>
        </div>
        <div className='dashboard_collection'>
          <div className='drop_box drop_green'>
            <img src={plusIconGreen} alt="" />
            <div className='drop_text'>Drag and Drop here</div>
          </div>
          <div className='drop_box drop_red'>
            <img src={plusIconRed} alt="" />
            <div className='drop_text'>Drag and Drop here</div>
          </div>
          <div className='drop_box drop_yellow'>
            <img src={plusIconYellow} alt="" />
            <div className='drop_text'>Drag and Drop here</div>
          </div>
        </div>
      </div>

      <div className='dashboard_right'>
        <div className='dashboard_level'>
          <div className='word_level_board'>
            <div className='level_head'>Levels</div>
            {levels.map((level, index) => (
              <div className='word_level' key={index}>
                <img src={level.icon} alt="" />
                <div className='level_progress'>
                  <div className='level_name'>{level.title}</div>
                  <div className='level_progress_box'>
                    <div>
                      <span>{level.progress}/33 words </span>
                      <span>{level.locked ? 'Locked' : `${33 - level.progress} words left`}</span>
                    </div>
                    <div className='level_progress_bar'><div className='level_progress_complete' style={{ width: `${(level.progress / 33) * 100}%` }}></div></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='streaks'>
          <div className='level_head'>Levels</div>
          {
            items.map((item, index) => (
              <div className='streak' key={index}>
                <div className='streak_text'>
                  <div>{item.name}</div>
                  <div>{item.streak}/5 streaks </div>
                  <div>{streakCoatPerStreak[item.streak]}</div>
                </div>
                <div className='streak_progress'>
                  {
                    Array.from({ length: 5 }, (_, index) => (
                      index < item.streak ? <img key={index} className='streak_complete' src={tickIcon} alt="" /> : <span key={index} className='streak_incomplete'></span>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>


    </div>
  )
}
