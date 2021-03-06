import React from 'react';
import Component from '../TopicContainer';
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';
import CoverVideo from '../../components/covers/CoverVideo';
import CoverImage from '../../components/covers/CoverImage';
import TopicArticles from '../../components/article/TopicArticles';
import ContentMulti from '../../components/contents/ContentMulti';
import ContentSingle from '../../components/contents/ContentSingle';


describe('FeedPageHeader', () => {
  it('should renders without crashing', () => {
    shallow(<Component />);
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

  it('should render static image (class)', () => {
    const data = {
      is_static : true
    };
    const selector = 'page-topic--has-static-image';
    const wrapper = shallow(<Component { ...data }/>);

    expect(wrapper.find(`.${selector}`)).toBePresent();
  });
});
