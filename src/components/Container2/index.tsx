import React from 'react'
import './styles.css'
import Barcelona from './images/Barcelona.jpeg'
import Rio from './images/Rio-Janeiro.jpeg'
import London from './images/London.jpeg'

export default function Container2() {
  return (
    <div className="articles">
      <article className="single-article">
        <img className="image" src={Barcelona} alt="Barcelona" />
        <h3 className="title">BARCELONA</h3>
        <p className="text-article">
          Barcelona is one of the most famous and visited cities in Europe and
          it is well known for some buildings or facts around its culture,
          history or current situation. But… there are some curiosities that
          perhaps you don’t know about the city and that would impress you!
        </p>
      </article>
      <article className="single-article">
        <img className="image" src={Rio} alt="Rio de Janeiro" />
        <h3 className="title">RIO de JANEIRO</h3>
        <p className="text-article">
          Rio de Janeiro, or January River, is a very poetic name for a city
          with more than 200 rivers running through it. But which river does it
          refer to? Well, the answer is: none of them. It was in January 1502
          that Portuguese explorer Gaspar de Lemos first arrived in Rio. Legend
          has it that Lemos was sailing through Guanabara Bay when he came up
          with the name for the city, mistaking the bay as the mouth of a big
          river.
        </p>
      </article>
      <article className="single-article">
        <img className="image" src={London} alt="London" />
        <h3 className="title">LONDON</h3>
        <p className="text-article">
          Big Ben is arguably London’s most famous landmark. Surprisingly, it is
          actually meant to go by the name ‘The Clock Tower’, while ‘Big Ben’ is
          the name of the bell. Feel free to bore your friends and family with
          that fact if you ever do a tour of London.
        </p>
      </article>
    </div>
  )
}
