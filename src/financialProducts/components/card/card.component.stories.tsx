import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card.component';

const meta: Meta<typeof Card> = {
    component: Card,
    decorators: [
        (Story) => (
            <div style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'gray',
                padding: '1rem',
            }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        children: {
            control: {
                disable: true,
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis urna eget purus fringilla accumsan. In ultricies egestas urna id vulputate. Maecenas porttitor mauris lectus, vel pulvinar augue viverra eu. Ut suscipit ipsum vitae nibh faucibus fermentum. Sed scelerisque lacus sed dui hendrerit, eget congue tortor porttitor. Nullam sodales enim eget sapien porttitor venenatis. Phasellus ultrices, sem vitae blandit tincidunt, augue odio rutrum est, sit amet rhoncus tortor sapien eu dui. Maecenas mollis quam sollicitudin, pretium leo mollis, ultricies nulla.</p>
            <p>Maecenas scelerisque tortor ac augue sodales, ac malesuada tortor ornare. Cras quis molestie velit. Nam feugiat eros a feugiat consectetur. Quisque pellentesque lorem velit, faucibus porta felis elementum vel. Etiam ultricies nisl vitae lorem fringilla posuere. Mauris accumsan, turpis sit amet aliquet dictum, metus turpis ullamcorper enim, quis mollis nisi erat nec libero. Nullam tempus, ex nec eleifend porttitor, urna sem commodo neque, nec tincidunt lectus sem in turpis. Etiam in molestie libero. Nulla volutpat justo arcu. Curabitur luctus tincidunt metus. Curabitur eget imperdiet ex, et euismod eros. Aenean ut condimentum nunc. Quisque molestie erat sed ante volutpat sollicitudin. Nunc a malesuada risus. Suspendisse euismod hendrerit sagittis. Fusce sit amet feugiat ex, rutrum efficitur nisi.</p>
            <p>Phasellus pellentesque tristique turpis, non efficitur dolor tristique ut. Pellentesque lobortis, enim sit amet lacinia feugiat, ante arcu malesuada metus, in tincidunt erat arcu ut libero. Curabitur a elit et lacus semper molestie quis id velit. Proin ac lacus orci. Proin facilisis pellentesque metus ornare iaculis. Nunc maximus nisl eget lectus tincidunt, id commodo sapien lobortis. Vestibulum vitae lorem consectetur, egestas turpis nec, tristique dui. Ut aliquet sem in tortor mattis sagittis. Integer placerat consectetur tellus, pretium sodales augue accumsan sit amet.</p>
            <p>Nam fermentum iaculis fringilla. Proin laoreet, justo ut facilisis pretium, enim lorem pellentesque elit, id mollis purus velit mattis purus. Proin placerat, lacus a molestie pulvinar, orci tellus varius velit, mattis maximus mi massa sodales odio. In non dignissim libero. Fusce a diam urna. In ac urna nec justo congue dictum non sit amet est. Suspendisse potenti. Nunc laoreet nibh scelerisque congue vulputate. Praesent egestas ex sed odio luctus commodo. Nulla elementum, est dignissim condimentum aliquet, tortor tellus congue erat, nec auctor lorem enim sagittis ex. In lacinia, arcu in cursus aliquam, neque nisl viverra sem, non volutpat tortor ipsum sit amet diam. Nullam auctor sapien tortor, at volutpat erat laoreet et. Aliquam ultricies augue in nibh mollis viverra. Ut risus ligula, tincidunt quis consectetur non, molestie in quam.</p>
            <p>Integer pulvinar ut arcu a accumsan. Nullam iaculis efficitur accumsan. Integer ultrices dolor consequat, auctor odio in, bibendum mauris. Fusce in placerat est. Nulla facilisi. Aenean non nunc molestie, blandit eros et, eleifend nunc. Donec quis semper odio.</p>
        </div>
    }
};
