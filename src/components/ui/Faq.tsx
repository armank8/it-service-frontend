import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `
Our tech service is your gateway to a world of innovation and efficiency. We specialize in delivering cutting-edge solutions tailored to your unique needs. From software development and IT support to cybersecurity and cloud computing, we're your trusted partner in navigating the ever-evolving tech landscape. 
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Do you have the best technicians?',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'How fast is your service ?',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'DO u open for 24/7',
        children: <p>{text}</p>,
    },
];

const Faq = () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <section className='section_container'>
            <h2 className='section_header'>Frequently Asked Questions</h2>

            <div >
                <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
            </div>
        </section>
    )
};

export default Faq;