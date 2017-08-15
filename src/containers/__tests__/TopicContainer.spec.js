import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../TopicContainer';
import { mount } from 'enzyme';
import 'jest-enzyme';
import CoverVideo from '../../components/covers/CoverVideo';
import CoverImage from '../../components/covers/CoverImage';
import TopicArticles from '../../components/article/TopicArticles';
import ContentMulti from '../../components/contents/ContentMulti';
import ContentSingle from '../../components/contents/ContentSingle';


describe('FeedPageHeader', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });

  it('should rendered cover part : video & image', () => {

    const wrapperVideo = mount(<Component has_video_bg/>);
    expect(wrapperVideo.find(CoverVideo)).toBePresent();

    const wrapperImg = mount(<Component has_video_bg={false} />);
    expect(wrapperImg.find(CoverImage)).toBePresent();
  });

  it('should rendered articles', () => {
    const data = {
      single_article : false,
      is_static : false
    };
    const wrapper = mount(<Component { ... data }/>);

    expect(wrapper.find(TopicArticles)).toBePresent();
  });

  it('should rendered contents (multi & single)', () => {
    const data = {
      is_static : false
    };
    const wrapperMulti = mount(<Component { ...data} topic_type='multi'/>);
    const wrapperSingle = mount(<Component { ...data} topic_type='single'/>);

    expect(wrapperMulti.find(ContentMulti)).toBePresent();
    expect(wrapperSingle.find(ContentSingle)).toBePresent();
  });
});
