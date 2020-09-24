import React from 'react';

export default function Wines (props) {
      return (
          <div>
              {props.wines.map( wine => {
                  return  (
                      <div key={wine.id} className="wine">
                          <h3>{ wine.winery }</h3>
                          <h4>{ wine.name }</h4>
                          <h4>{ wine.vintage }</h4>
                          <small>{wine.region}, {wine.country}</small>
                      </div>
                  )
              })}
          </div>
      )
}