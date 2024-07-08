import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedValue, SetValue] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedValue ? `${selectedValue} is selected` : 'No goods selected'}

        {selectedValue && (
          <button
            onClick={() => SetValue('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const selected = good === selectedValue;

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selected,
                })}
              >
                <td>
                  <button
                    onClick={() => {
                      SetValue(selected ? '' : good);
                    }}
                    key={good}
                    data-cy={selected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', { 'is-info': selected })}
                  >
                    {selected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
