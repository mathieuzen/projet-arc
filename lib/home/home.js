import o from 'component-dom';
import page from 'page';
import Home from './view';
import Article from '../proposal-article/proposal-article';
import {
    findTopics,
    clearTopicStore
} from '../topic-middlewares/topic-middlewares';
import topicStore from '../topic-store/topic-store';
import topicFilter from '../topic-filter/topic-filter';
import tagStore from '../tag-store/tag-store';


page('/', (ctx, next) => {

    var counter = 0;
    topicStore.findAll().then(function(topics) {
        for (var topic of topics) {
            topicStore.findOne(topic.id).then(function(content) {
                counter++;
                if (content.clauses.length > 0) {
                    topics[counter - 1].content = content.clauses[0].markup.replace(/(<([^>]+)>)/ig, "");
                    if (counter >= topics.length) {
                        tagStore.findAll().then(function(tags) {
                            let homepage = new Home(topics, tags);
                            let el = o('#content');
                            homepage.replace(el[0]);
                        });
                    }
                }
            });
        }
    });
});
