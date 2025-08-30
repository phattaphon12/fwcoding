if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # แสดงอาร์กิวเมนต์สูงสุด 3 ตัว
    echo "$1"
    [ $# -gt 1 ] && echo "$2"
    [ $# -gt 2 ] && echo "$3"
fi