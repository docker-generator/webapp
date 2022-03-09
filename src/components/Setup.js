import React from 'react';
import { HomeListItem, IconInput } from 'components/index';
import { buttons, containers, texts, inputs } from 'styles';
import ic_pencil_edit from 'assets/images/ic-pencil-edit.svg';
import ic_search from '../assets/images/ic-search.svg';
import { colors } from '../styles/constants';
import { smallSuccess } from '../styles/buttons';


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
    <containers.main style={{ marginTop: '45px' }}>
      <containers.row_wide noPadding style={ { marginBottom: '50px' } }>
        <containers.col_left style={ { width: '50%', height: '90vh' } }>
          <containers.col_left style={{flexDirection: 'row'}}>
            <texts.base
              as={ 'h1' }
              size={ texts.sizes.title_regular }
              weight={ texts.weights.bold }
              style={ { marginBottom: '60px' } }
            >{ mockData[1].title }</texts.base>
            <a href='#' style={{margin: '6px 0 0 10px'}}><img src={ic_pencil_edit} alt='Rename' style={{height: '20px'}} /></a>
          </containers.col_left>
          <containers.row_left className='network_container' noPadding style={ { marginBottom: '23px' } }>
            <containers.col_left>
              <texts.base
                as={ 'h3' }
                size={ texts.sizes.title_small }
                weight={ texts.weights.medium }
              >Network
              </texts.base>
            </containers.col_left>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.smallSuccess>Add</buttons.smallSuccess>
            </containers.col_left>
          </containers.row_left>
          <containers.row_wide style={{ padding: 0}}>
            <containers.col_left style={{ backgroundColor: colors.secondary_10, width: '480px', minHeight: '100px', marginBottom: '75px', borderRadius: '8px' }}>
              <containers.row_wide style={ { marginTop: '20px' } }>
                <containers.col_left>main:</containers.col_left>
                <containers.col_right style={{ minWidth: '140px', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <buttons.smallSecondary>Edit</buttons.smallSecondary>
                  <buttons.smallSecondary>Remove</buttons.smallSecondary>
                </containers.col_right>
              </containers.row_wide>
            </containers.col_left>
          </containers.row_wide>
          <containers.row_left className='docker_container' noPadding style={ { marginBottom: '23px' } }>
            <containers.col_left>
              <texts.base
                as={ 'h3' }
                size={ texts.sizes.title_small }
                weight={ texts.weights.medium }
              >Container
              </texts.base>
            </containers.col_left>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.smallSuccess>Add</buttons.smallSuccess>
            </containers.col_left>
          </containers.row_left>
          <containers.row_wide style={{ padding: 0}}>
            <containers.col_left style={{ backgroundColor: colors.secondary_10, width: '480px', minHeight: '100px', marginBottom: '15px', borderRadius: '8px' }}>
              <containers.row_wide style={ { marginTop: '20px' } }>
                <containers.col_left>main:</containers.col_left>
                <containers.col_right style={{ minWidth: '140px', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <buttons.smallSecondary>Edit</buttons.smallSecondary>
                  <buttons.smallSecondary>Remove</buttons.smallSecondary>
                </containers.col_right>
              </containers.row_wide>
            </containers.col_left>
          </containers.row_wide>
          <containers.row_wide style={{ padding: 0}}>
            <containers.col_left style={{ backgroundColor: colors.secondary_10, width: '480px', minHeight: '100px', marginBottom: '15px', borderRadius: '8px' }}>
              <containers.row_wide style={ { marginTop: '20px' } }>
                <containers.col_left>main:</containers.col_left>
                <containers.col_right style={{ minWidth: '140px', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <buttons.smallSecondary>Edit</buttons.smallSecondary>
                  <buttons.smallSecondary>Remove</buttons.smallSecondary>
                </containers.col_right>
              </containers.row_wide>
            </containers.col_left>
          </containers.row_wide>
        </containers.col_left>
        <containers.col_right style={ { width: '50%', height: '90vh', backgroundColor: colors.secondary_20, borderRadius: '8px' } }>
          <containers.row_center noPadding style={ { marginBottom: '15px' } }>
            <containers.col_center style={ { padding: '25px', margin: '20px', color: 'white', boxSizing: 'border-box', width: '93%', minHeight: '680px', backgroundColor: '#626262', borderRadius: '8px' } }>
              <p>version: "3.7"

                services:
                golang:
                build:
                context: ./docker/golang
                container_name: 'golang'
                restart: always
                ports:
                - "8080:8080"
                links:
                - elasticsearch
                volumes:
                - ./api:/go/src/github.com/GoElasticsearch/api
                networks:
                - main
                elasticsearch:
                build: ./docker/elasticsearch
                container_name: 'elasticsearch'
                environment:
                - discovery.type=single-node
                - cluster.name=docker-cluster
                - bootstrap.memory_lock=true
                - "ES_JAVA_OPTS=-Xms256m -Xmx256m"
                ulimits:
                memlock:
                soft: -1
                hard: -1
                ports:
                - "9200:9200"
                volumes:
                - ./data/elasticsearch:/usr/share/elasticsearch/data
                networks:
                - main
                kibana:
                image: kibana:7.13.2
                container_name: 'kibana'
                volumes:
                - ./config/kibana/kibana.yml:/usr/share/kibana/kibana.yml
                ports:
                - "5601:5601"
                links:
                - elasticsearch
                networks:
                - main</p>
            </containers.col_center>
          </containers.row_center>
          <containers.row_left noPadding style={ { backgroundColor: colors.primary_70, height: '100%', borderRadius: '8px' } }>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.white style={{background: 'white'}}>Download</buttons.white>
            </containers.col_left>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.white style={{background: 'white'}}>Save</buttons.white>
            </containers.col_left>
          </containers.row_left>
        </containers.col_right>
      </containers.row_wide>
    </containers.main>
  );
}
