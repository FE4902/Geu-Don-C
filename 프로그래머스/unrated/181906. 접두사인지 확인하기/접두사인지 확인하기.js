function solution(my_string, is_prefix) {
    return [...my_string].splice(0, is_prefix.length).join('') === is_prefix ? 1 : 0;
}