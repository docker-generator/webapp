import React from 'react';
import { HomeListItem, IconInput } from 'components/index';
import { buttons, containers, texts, inputs } from 'styles';
import ic_pencil_edit from 'assets/images/ic-pencil-edit.svg';
import ic_search from '../assets/images/ic-search.svg';
import { colors } from '../styles/constants';


const mockData = [
  {
    id: 1,
    title: 'Setup #1274',
    description: 'Description 1',
    last_edited: '02/03/2022'
  },
  {
    id: 2,
    title: 'Setup #1275',
    description: 'Description 2',
    last_edited: '12/02/2022'
  },
  {
    id: 3,
    title: 'Setup #1276',
    description: 'Description 3',
    last_edited: '14/02/2022'
  },
  {
    id: 4,
    title: 'Setup #1277',
    description: 'Description 4',
    last_edited: '21/02/2022'
  },
  {
    id: 5,
    title: 'Setup #1278',
    description: 'Description 5',
    last_edited: '18/02/2022'
  },
];

export default function Setup() {
  return (
    /*<containers.main style={ { marginTop: '45px' } }>
      <containers.row_wide noPadding style={ { marginBottom: '50px' } }>
        <containers.col_left>
          <texts.base
            as={ 'h1' }
            size={ texts.sizes.title_regular }
            weight={ texts.weights.bold }
            style={ { marginBottom: '20px' } }
          >{ mockData[1].title }</texts.base>
        </containers.col_left>
        <containers.col_right>
          <div style={{height: '80vh', width: '50%', backgroundColor: 'darkgray'}}>
            TEST
          </div>
        </containers.col_right>
      </containers.row_wide>
      <containers.row_left noPadding style={ { marginBottom: '50px' } }>
        <containers.col_left>
          <texts.base
            as={ 'h3' }
            size={ texts.sizes.title_small }
            weight={ texts.weights.medium }
          >Network
          </texts.base>
        </containers.col_left>
        <containers.col_left style={ { marginLeft: '40px' } }>
          <buttons.success>Add</buttons.success>
        </containers.col_left>
      </containers.row_left>
      <containers.row_left noPadding style={ { marginBottom: '50px' } }>
        <containers.col_left>
          <texts.base
            as={ 'h3' }
            size={ texts.sizes.title_small }
            weight={ texts.weights.medium }
          >Container
          </texts.base>
        </containers.col_left>
        <containers.col_left style={ { marginLeft: '40px' } }>
          <buttons.success>Add</buttons.success>
        </containers.col_left>
      </containers.row_left>
    </containers.main>*/
    <containers.main style={{ marginTop: '45px' }}>
      <containers.row_wide noPadding style={ { marginBottom: '50px' } }>
        <containers.col_left style={ { width: '50%', height: '90vh' } }>
          <containers.col_left>
            <texts.base
              as={ 'h1' }
              size={ texts.sizes.title_regular }
              weight={ texts.weights.bold }
              style={ { marginBottom: '60px' } }
            >{ mockData[1].title }</texts.base>
          </containers.col_left>
          <containers.row_left noPadding style={ { marginBottom: '50px' } }>
            <containers.col_left>
              <texts.base
                as={ 'h3' }
                size={ texts.sizes.title_small }
                weight={ texts.weights.medium }
              >Network
              </texts.base>
            </containers.col_left>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.success>Add</buttons.success>
            </containers.col_left>
          </containers.row_left>
          <containers.row_left noPadding style={ { marginBottom: '50px' } }>
            <containers.col_left>
              <texts.base
                as={ 'h3' }
                size={ texts.sizes.title_small }
                weight={ texts.weights.medium }
              >Container
              </texts.base>
            </containers.col_left>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.success>Add</buttons.success>
            </containers.col_left>
          </containers.row_left>
        </containers.col_left>
        <containers.col_right style={ { width: '50%', height: '90vh', backgroundColor: colors.secondary_20 } }>
          <containers.row_center noPadding style={ { marginBottom: '15px' } }>
            <containers.col_center style={ { margin: '15px', width: '95%', height: '700px', backgroundColor: 'gray' } }>
              EDITOR
            </containers.col_center>
          </containers.row_center>
          <containers.row_left noPadding style={ { backgroundColor: 'green', height: '100%' } }>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.primary>Download</buttons.primary>
            </containers.col_left>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.primary>Save</buttons.primary>
            </containers.col_left>
          </containers.row_left>
        </containers.col_right>
      </containers.row_wide>
    </containers.main>
  );
}
