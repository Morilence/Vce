export default {
    // to find and return the item reference
    findItemByPath(path, project) {
        if (path == project.name) {
            return project;
        } else {
            const names = path.split("/");
            names.shift();
            let list = project.children;
            let name = names.shift();
            while (names.length >= 0) {
                const index = list.findIndex(item => {
                    return item.name == name;
                });
                if (names.length > 0) {
                    list = list[index].children;
                    name = names.shift();
                } else if (names.length == 0) {
                    return list[index];
                }
            }
        }
    }
};
