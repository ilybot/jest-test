function parseDepthFirst(markdown) {
    var lines = markdown.trim().split('\n');
    var inc = 1;
    function countTabs(line) {
        return (line.split('-')[0].match(/  /g) || []).length;
    }
    function recursive(i, pid = null, res = []) {
        var id = inc++
        res.push({ id: id, name: lines[i].split('-')[1].trim(), parent_id: pid });
        var countParent = countTabs(lines[i]);
        for(let j=i+1; j < lines.length; j++){ 
            var count = countTabs(lines[j])
            if (count == countParent)
            break;
            if(count == countParent+1)
            recursive(j, id, res);
        }
        return res;
    }
    return recursive(0);
}

function parseBreadthFirst(markdown) {
    var lines = markdown.trim().split('\n');
    var inc = 1;
    function countTabs(line) {
        return (line.split('-')[0].match(/  /g) || []).length;
    }
    function recursive(i, id, res = [], toVisit = []) {
        if (i == 0)
        res.push({ id: inc, name: lines[i].split('-')[1].trim(), parent_id: null });
        var countParent = countTabs(lines[i]);
        for(let j=i+1; j < lines.length; j++){ 
            var count = countTabs(lines[j])
            if (count == countParent)
            break;
            if(count == countParent+1){
                res.push({ id: ++inc, name: lines[j].split('-')[1].trim(), parent_id: id});
                toVisit.push([j,inc]);
            }
        }
        while(toVisit.length != 0) {
            var pair = toVisit.shift();
            recursive(pair[0], pair[1], res, toVisit);
        }
        return res;
    }
    return recursive(0, 1);
}

module.exports = {
    parseDepthFirst,
    parseBreadthFirst,
};