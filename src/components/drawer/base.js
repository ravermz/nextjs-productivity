import PropTypes from 'prop-types';
import {
    SwipeableDrawer
} from '@material-ui/core';
import {
    FormatListBulleted,
    Equalizer
} from '@material-ui/icons';

import TabBase from '../tab/base';
import TabsBase from '../tabs/base';

const LinkTab = ({
    option,
    ...props
}) => (
    <TabBase
        { ...props }
        component={'a'}
        onClick={event => {
            event.preventDefault();
        }}/>
);

const linkTabProps = index => ({
    id: `drawer-nav-tab-${index}`,
    'aria-controls': `drawer-nav-tabpanel-${index}`,
    tabindex: `"${index}"`
});

const DrawerBase = ({
    open,
    drawerOptionsArray,
    onClose,
    onOpen,
    handleTabChange,
    tabActive
}) => (
    <SwipeableDrawer
        open={open}
        onClose={onClose}
        onOpen={onOpen}>
        <TabsBase
            orientation={'vertical'}
            value={tabActive}
            onChange={handleTabChange}>
            { drawerOptionsArray.map((drawerOption, index) => (
                <LinkTab
                    icon={drawerOption.icon}
                    option={drawerOption}
                    { ...linkTabProps (index) }
                    href={drawerOption.path}
                    label={drawerOption.text}/>
            )) }
        </TabsBase>
    </SwipeableDrawer>
);

DrawerBase.propTypes = {
    open: PropTypes.bool,
    drawerOptionsArray: PropTypes.array,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    tabActive: PropTypes.number,
    handleTabChange: PropTypes.func
};

DrawerBase.defaultProps = {
    open: true,
    drawerOptionsArray: [
        {
            icon: <FormatListBulleted />,
            text: `Tareas`,
            path: `/tasks`
        },
        {
            icon: <Equalizer />,
            text: `Rendimiento`,
            path: `/performance`
        }
    ]
};

export default DrawerBase;
